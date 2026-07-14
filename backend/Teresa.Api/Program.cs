using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;
using PostmarkDotNet;
using Teresa.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();
builder.Services.AddHttpClient();

// Rate limiting
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    options.AddFixedWindowLimiter("ContactForm", opt =>
    {
        opt.Window = TimeSpan.FromMinutes(15);
        opt.PermitLimit = 3;
        opt.QueueLimit = 0;
    });
});

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://teresafamilycharity.org")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("Frontend");
app.UseRateLimiter();

app.MapGet("/api/health", () => Results.Ok(new { Status = "Healthy" }));

app.MapPost("/api/contact", async (
    ContactRequest request, 
    IHttpClientFactory httpClientFactory, 
    IConfiguration config) =>
{
    // 1. Honeypot check
    if (!string.IsNullOrEmpty(request.Website))
    {
        return Results.Ok(); // Silently accept
    }

    // 2. Input validation
    if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { Error = "Invalid input." });
    }

    if (request.Message.Length > 3000)
    {
        return Results.BadRequest(new { Error = "Message is too long." });
    }

    // 3. Turnstile verification
    var turnstileSecret = config["Cloudflare:TurnstileSecret"];
    if (!string.IsNullOrEmpty(turnstileSecret))
    {
        var client = httpClientFactory.CreateClient();
        var verifyResponse = await client.PostAsync("https://challenges.cloudflare.com/turnstile/v0/siteverify",
            new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("secret", turnstileSecret),
                new KeyValuePair<string, string>("response", request.TurnstileToken)
            }));

        if (!verifyResponse.IsSuccessStatusCode)
        {
            return Results.BadRequest(new { Error = "Failed to verify captcha." });
        }

        var turnstileResult = await verifyResponse.Content.ReadFromJsonAsync<TurnstileResponse>();
        if (turnstileResult == null || !turnstileResult.Success)
        {
            return Results.BadRequest(new { Error = "Captcha verification failed." });
        }
    }

    // 4. Send email via Postmark
    var postmarkToken = config["Postmark:ServerToken"];
    if (!string.IsNullOrEmpty(postmarkToken))
    {
        var message = new PostmarkMessage
        {
            To = "contact@teresafamilycharity.org",
            From = "noreply@teresafamilycharity.org",
            TrackOpens = true,
            Subject = $"New Contact Form Submission from {request.FirstName} {request.LastName}",
            TextBody = $"Name: {request.FirstName} {request.LastName}\nEmail: {request.Email}\n\nMessage:\n{request.Message}",
            ReplyTo = request.Email
        };

        var postmarkClient = new PostmarkClient(postmarkToken);
        await postmarkClient.SendMessageAsync(message);
    }
    
    return Results.Ok();
})
.RequireRateLimiting("ContactForm")
.WithName("SubmitContact");

app.Run();
