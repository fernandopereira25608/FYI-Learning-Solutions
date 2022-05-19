using FYI.web.Api.ViewModels;
using System.Threading.Tasks;

namespace FYI.web.Api.Services
{
    public interface IEnvioEmailServices
    {
       public void Envio(string from, string to, string subject, string html);
    }
}
