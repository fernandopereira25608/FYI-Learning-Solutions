using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FYI.web.Api.Domains
{
    public partial class CursoDomain
    {
        public CursoDomain()
        {
            Turmas = new HashSet<TurmaDomain>();
        }

        public byte IdCurso { get; set; }

        [Required(ErrorMessage = "Informe o nome do curso!!!!")]
        public string NomeCurso { get; set; }

        [Required(ErrorMessage = "Insira a descrição, ela é necessária para a informação do aluno quanto ao curso!!!!")]
        [StringLength(2048)]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "Insira a quantidade de vagas restantes!!!!")]
        public byte VagasDisponiveis { get; set; }

        [Required(ErrorMessage = "Insira a quantidade de vagas preenchidas!!!!")]
        public byte VagasPreenchidas { get; set; }

        [Required(ErrorMessage = "Informe a duração do curso!!!!")]
        [DataType(DataType.Duration)]
        public byte CargaHoraria { get; set; }

        public string Imagem { get; set; }

        public byte? IdCategoria { get; set; }

        public virtual CategoriumDomain IdCategoriaNavigation { get; set; }

        public virtual ICollection<TurmaDomain> Turmas { get; set; }
    }
}
