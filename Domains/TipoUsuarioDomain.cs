using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.web.Api.Domains
{
    public partial class TipoUsuarioDomain
    {
        public TipoUsuarioDomain()
        {
            Usuarios = new HashSet<UsuarioDomain>();
        }

        public byte IdTipoUsuario { get; set; }

        [Required(ErrorMessage = "Informe o título do tipo de usuário!!!!")]
        public string Titulo { get; set; }

        public virtual ICollection<UsuarioDomain> Usuarios { get; set; }
    }
}
