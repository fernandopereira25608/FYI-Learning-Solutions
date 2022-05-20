using FYI.web.Api.Requisicoes;
using System.Threading.Tasks;

namespace FYI.web.Api.Services
{
    public interface IEnvioEmailServices
    {
        Task SendEmailAsync(EnvioEmailRequest emailSolicitado);
    }
}
