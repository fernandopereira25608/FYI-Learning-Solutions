using System;
using System.Collections.Generic;

#nullable disable

namespace FYI.webAPI.Domains
{
    public partial class InscricaoDomain
    {
        public int IdInscricao { get; set; }
        public short? IdUsuario { get; set; }
        public byte? IdTurma { get; set; }
        public DateTime? DataInscricao { get; set; }

        public virtual TurmaDomain IdTurmaNavigation { get; set; }
        public virtual UsuarioDomain IdUsuarioNavigation { get; set; }
    }
}
