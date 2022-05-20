
using FYI.web.Api.Settings;
using FYI.web.Api.Requisicoes;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;
using System.Threading.Tasks;
using System.IO;

namespace FYI.web.Api.Services
{
    public class EnvioEmailServices : IEnvioEmailServices
    {

        private readonly EnvioEmailConfiguracoes _emailConfiguracoes;

        public EnvioEmailServices(IOptions<EnvioEmailConfiguracoes> emailConfiguracoes)
        {
            _emailConfiguracoes = emailConfiguracoes.Value;
        }

        public async Task SendEmailAsync(EnvioEmailRequest emailSolicitado)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_emailConfiguracoes.From);
            email.To.Add(MailboxAddress.Parse(emailSolicitado.Email));
            email.Subject = emailSolicitado.Assunto;

            var builder = new BodyBuilder();
            if (emailSolicitado.Anexos != null)
            {
                byte[] fileBytes;
                foreach (var file in emailSolicitado.Anexos)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyTo(ms);
                            fileBytes = ms.ToArray();
                        }
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }

                using var smtp = new SmtpClient();
                builder.HtmlBody = emailSolicitado.CorpoDoTexto;
                email.Body = builder.ToMessageBody();

                smtp.Connect(_emailConfiguracoes.Host, _emailConfiguracoes.Port, SecureSocketOptions.StartTls);
                smtp.Authenticate(_emailConfiguracoes.From, emailSolicitado.Senha);
                await smtp.SendAsync(email);
            }
        }
    } 
}

