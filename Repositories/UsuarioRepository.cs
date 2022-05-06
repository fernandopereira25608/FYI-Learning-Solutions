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
            novoUsuario.Senha = Criptografia.ConstruirHash(novoUsuario.Senha);

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
            var usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);
            var usuarin = ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);


            if (usuarin != null)
            {
                if (usuarin.Senha.Length != 60)
                {
                    usuarin.Senha = Criptografia.ConstruirHash(senha);

                    ctx.Usuarios.Update(usuarin);

                    ctx.SaveChanges();

                    return usuarin;
                }
            }

            if (usuario != null)
            {
                bool comparado = Criptografia.Verificar(senha, usuario.Senha);
                if (comparado)
                {
                    return usuario;
                }
            }
            return null;
        }


        public UsuarioDomain BuscarPorEmail(string Email)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email ==Email);
        }
    }
}
