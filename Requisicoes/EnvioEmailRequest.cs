using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace FYI.web.Api.Requisicoes
{
    public class EnvioEmailRequest
    {
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Assunto { get; set; }
        public string CorpoDoTexto { get; set; }
        public List<IFormFile> Anexos { get; set; }
    }
}
