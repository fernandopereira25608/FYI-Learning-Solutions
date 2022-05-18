using FYI.web.Api.ViewModels;
using System.Threading.Tasks;

namespace FYI.web.Api.Utilidades.EnvioDeEmail
{
    public interface IEnvioEmailRepository
    {
       public void Envio(string from, string to, string subject, string html);
    }
}
