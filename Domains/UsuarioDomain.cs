using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.web.Api.Domains
{
    public partial class UsuarioDomain
    {
        public UsuarioDomain()
        {
            Inscricaos = new HashSet<InscricaoDomain>();
        }

        public short IdUsuario { get; set; }
        public byte? IdTipoUsuario { get; set; }


        [Required(ErrorMessage = "Insira o nome do usuário!!!!")]
        public string Nome { get; set; }

        public string Empresa { get; set; }

        [Required(ErrorMessage = "Insira o email do usuário!!!!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Insira a senha do email!!!!")]
        [StringLength(70, MinimumLength = 8, ErrorMessage = "A senha deve conter no mínimo 8 caracteres!!!!")]
        public string Senha { get; set; }

        public virtual TipoUsuarioDomain IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<InscricaoDomain> Inscricaos { get; set; }
    }
}
