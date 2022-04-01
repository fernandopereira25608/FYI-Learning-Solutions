﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.webAPI.Domains
{
    public partial class TurmaDomain
    {
        public TurmaDomain()
        {
            Inscricaos = new HashSet<InscricaoDomain>();
        }

        public byte IdTurma { get; set; }
        public byte? IdCurso { get; set; }

        [Required(ErrorMessage = "Informe o nome da turma!!!!")]
        public string NomeTurma { get; set; }

        public virtual CursoDomain IdCursoNavigation { get; set; }
        public virtual ICollection<InscricaoDomain> Inscricaos { get; set; }
    }
}
