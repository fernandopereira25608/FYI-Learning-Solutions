

using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FYI.web.Api.Repositories
{
    public class CursoRepository : ICursoRepository
    {
        FYIContext ctx = new FYIContext();
        public void Atualizar(byte id, CursoDomain CursoAtualizado)
        {
            CursoDomain CursoProcurado = ctx.Cursos.Find(id);

            if (CursoAtualizado.NomeCurso != null)
            {
                CursoProcurado.NomeCurso = CursoAtualizado.NomeCurso;
            }

            if (CursoProcurado.Descricao != null)
            {
                CursoProcurado.Descricao = CursoAtualizado.Descricao;
            }

            ctx.Cursos.Update(CursoProcurado);

            ctx.SaveChanges();
        }

        public CursoDomain BuscarPorId(byte id)
        {
            return ctx.Cursos.FirstOrDefault(e => e.IdCurso == id);
        }

        public void Cadastrar(CursoDomain novoCurso)
        {
            ctx.Cursos.Update(novoCurso);
            ctx.SaveChanges();
        }

        public void Deletar(byte id)
        {
            ctx.Cursos.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<CursoDomain> Listar()
        {
            return ctx.Cursos.ToList();
        }

    }
}
