using FYI.web.Api.Services;
using FYI.web.Api.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FYI.web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnvioEmailsControllers : ControllerBase
    {
        private readonly IEnvioEmailServices envioEmailServices;

        public EnvioEmailsControllers(IEnvioEmailServices envioEmail)
        {
            this.envioEmailServices = envioEmailServices;
        }

        [HttpPost("envio")]
        public async Task<IActionResult> EnviarEmail([FromForm] EnvioEmailViewModel emailSolicitado)
        {

        }

    }
}
