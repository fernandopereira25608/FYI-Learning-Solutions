

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
            CursoDomain CursoBuscado = ctx.Cursos.Find(id);

            // Verifica se o nome do usuário foi informado
            if (CursoAtualizado.NomeCurso != null)
            {
                // Atribui os novos valores ao campos existentes
                CursoBuscado.NomeCurso = CursoAtualizado.NomeCurso;
            }

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
