using System;
using System.Collections.Generic;

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
        public string Titulo { get; set; }

        public virtual ICollection<CursoDomain> Cursos { get; set; }
    }
}
