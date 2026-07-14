namespace Teresa.Api.Models;

public class ContactRequest
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string TurnstileToken { get; set; } = string.Empty;
    public string Website { get; set; } = string.Empty; // Honeypot
}
