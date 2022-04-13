using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.web.Api.Domains
{
    public partial class InscricaoDomain
    {
        public int IdInscricao { get; set; }
        public short? IdUsuario { get; set; }
        public byte? IdTurma { get; set; }

        [Required(ErrorMessage = "Insira a data de inscrição!!!!")]
        [DataType(DataType.Date)]
        public DateTime? DataInscricao { get; set; }

        public virtual TurmaDomain IdTurmaNavigation { get; set; }
        public virtual UsuarioDomain IdUsuarioNavigation { get; set; }
    }
}
