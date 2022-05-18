using FYI.web.Api.ViewModels;
using FYI.web.Api.Utilidades.EnvioDeEmail;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MimeKit.Text;

namespace FYI.web.Api.Utilidades.EnvioDeEmail
{
    public class EnvioEmailRepository : IEnvioEmailRepository
    {

            private readonly EnvioEmailConfiguracoes _emailConfiguracoes;

            public EnvioEmailRepository(IOptions<EnvioEmailConfiguracoes> emailConfiguracoes)
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

            // send email
            using var smtp = new SmtpClient();
            smtp.Connect(_emailConfiguracoes.Host, _emailConfiguracoes.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_emailConfiguracoes.From, _emailConfiguracoes.Password);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}

