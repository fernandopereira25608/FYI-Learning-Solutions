using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.web.Api.Domains
{
    public partial class CategoriumDomain
    {
        public CategoriumDomain()
        {
            Cursos = new HashSet<CursoDomain>();
        }

        public byte IdCategoria { get; set; }

        [Required(ErrorMessage = "Insira o título da categoria!!!!")]
        public string Titulo { get; set; }

        public virtual ICollection<CursoDomain> Cursos { get; set; }
    }
}
