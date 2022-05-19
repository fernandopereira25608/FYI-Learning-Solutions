using FYI.web.Api.Settings;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace FYI.web.Api.Services
{
    public class EnvioEmailServices: IEnvioEmailServices
    {

            private readonly EnvioEmailConfiguracoes _emailConfiguracoes;

            public EnvioEmailServices(IOptions<EnvioEmailConfiguracoes> emailConfiguracoes)
            {
                _emailConfiguracoes = emailConfiguracoes.Value;
            }

        public void Envio(string from, string to, string subject, string html)
        {
            var email = new MimeMessage();

            email.From.Add(MailboxAddress.Parse(from));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = html };

            using var smtp = new SmtpClient();
            smtp.Connect(_emailConfiguracoes.Host, _emailConfiguracoes.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_emailConfiguracoes.From, _emailConfiguracoes.Password);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}

