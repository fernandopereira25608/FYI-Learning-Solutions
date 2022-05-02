using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Contexts;

namespace FYI.web.Api.Repositories
{
    public class TurmaRepository : ITurmaRepository
    {
        FYIContext ctx = new FYIContext();

        public List<TurmaDomain> Listar()
        {
            return ctx.Turmas.ToList();
        }

        public void Cadastrar(TurmaDomain novaTurma)
        {
            ctx.Turmas.Add(novaTurma);

            ctx.SaveChanges();
        }

        public void Deletar(byte id)
        {
            TurmaDomain turmaBuscada = ctx.Turmas.Find(id);

            ctx.Turmas.Remove(turmaBuscada);

            ctx.SaveChanges();
        }

        public void Atualizar(byte id, TurmaDomain turmaAtualizada)
        {
            TurmaDomain turmaProcurada = ctx.Turmas.Find(id);

            if (turmaAtualizada.IdCurso != null)
            {
                turmaProcurada.IdCurso = turmaAtualizada.IdCurso;
            }

            if (turmaAtualizada.NomeTurma != null)
            {
                turmaProcurada.NomeTurma = turmaAtualizada.NomeTurma;
            }

            ctx.Turmas.Update(turmaProcurada);

            ctx.SaveChanges();
        }

        public TurmaDomain BuscarPorId(byte id)
        {
            return ctx.Turmas.FirstOrDefault(tu => tu.IdTurma == id);
        }

        public TurmaDomain BuscarPorCurso(byte idc)
        {
            return ctx.Turmas.FirstOrDefault(en =>en.IdCursoNavigation.IdCurso == idc);   
        }

    }
}
