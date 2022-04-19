using System;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using System.Collections.Generic;
using FYI.web.Api.Domains;
using FYI.web.Api.Contexts;

namespace FYI.web.Api.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage =  "Insira o email do usuário!!!!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Insira a senha do email!!!!")]
        public string Senha { get; set; }
    }
}
