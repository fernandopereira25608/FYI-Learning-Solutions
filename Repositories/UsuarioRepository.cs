using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Utilidades;
using System.Collections.Generic;
using System.Linq;

namespace FYI.web.Api.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        FYIContext ctx = new FYIContext();
        public void Atualizar(short id, UsuarioDomain usuarioAtualizado)
        {
            UsuarioDomain usuarioBuscado = ctx.Usuarios.Find(id);

            if (usuarioAtualizado.Nome != null)
            {
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
            }

            if (usuarioAtualizado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }

            if (usuarioAtualizado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            ctx.Usuarios.Update(usuarioBuscado);

            ctx.SaveChanges();
        }

        public UsuarioDomain BuscarPorId(short id)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);
        }

        public void Cadastrar(UsuarioDomain novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(short id)
        {
            UsuarioDomain usuarioBuscado = ctx.Usuarios.Find(id);

            ctx.Usuarios.Remove(usuarioBuscado);

            ctx.SaveChanges();
        }

        public List<UsuarioDomain> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        public UsuarioDomain Login(string email, string senha)
        {
            var usuarin = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            Criptografia.Verificar(senha, usuarin.Senha);

            return usuarin;
        }

        public UsuarioDomain BuscarPorEmail(string Email)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email ==Email);
        }
    }
}
