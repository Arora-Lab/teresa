using System.Text.Json.Serialization;

namespace Teresa.Api.Models;

public class TurnstileResponse
{
    [JsonPropertyName("success")]
    public bool Success { get; set; }
    
    [JsonPropertyName("error-codes")]
    public string[]? ErrorCodes { get; set; }
}
