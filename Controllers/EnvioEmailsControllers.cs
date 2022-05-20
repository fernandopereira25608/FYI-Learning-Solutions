using FYI.web.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FYI.web.Api.Requisicoes;

namespace FYI.web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnvioEmailsControllers : ControllerBase
    {
        private readonly IEnvioEmailServices envioEmailServices;

        public EnvioEmailsControllers(IEnvioEmailServices envioEmail)
        {
            this.envioEmailServices = envioEmail;
        }

        [HttpPost("Envio")]
        public async Task<IActionResult> EnviarEmail([FromForm] EnvioEmailRequest emailSolicitado)
        {
            try
            {
                await envioEmailServices.SendEmailAsync(emailSolicitado);
                return Ok("Email enviado com sucesso :) !!!!");
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

    }
}
