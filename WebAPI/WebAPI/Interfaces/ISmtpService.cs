using WebAPI.Models.SMTP;

namespace WebAPI.Interfaces;

public interface ISmtpService
{
    Task<bool> SendEmailAsync(EmailMessage message);
}