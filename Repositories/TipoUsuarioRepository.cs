using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Contexts;

namespace FYI.web.Api.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {

        FYIContext ctx = new FYIContext();

        public List<TipoUsuarioDomain> Listar()
        {
            return ctx.TipoUsuarios.ToList();
        }

        public void Cadastrar(TipoUsuarioDomain novoTipoUsuario)
        {
            ctx.TipoUsuarios.Add(novoTipoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(byte id)
        {
            TipoUsuarioDomain tipoUsuarioBuscado = ctx.TipoUsuarios.Find(id);

            ctx.TipoUsuarios.Remove(tipoUsuarioBuscado);

            ctx.SaveChanges();
        }

        public void Atualizar(byte id, TipoUsuarioDomain tipoUsuarioAtualizado)
        {
            TipoUsuarioDomain tipoUsuarioBuscado = ctx.TipoUsuarios.Find(id);
            
            if (tipoUsuarioAtualizado.Titulo != null)
            {
                tipoUsuarioBuscado.Titulo = tipoUsuarioAtualizado.Titulo;
            }

            ctx.TipoUsuarios.Update(tipoUsuarioBuscado);

            ctx.SaveChanges();
        }

        public TipoUsuarioDomain BuscarPorId(byte id)
        {
            return ctx.TipoUsuarios.FirstOrDefault(tu => tu.IdTipoUsuario == id);
        }

    }
}
