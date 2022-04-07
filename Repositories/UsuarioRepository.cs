using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
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

            // Verifica se o nome do usuário foi informado
            if (usuarioAtualizado.Nome != null)
            {
                // Atribui os novos valores ao campos existentes
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
            }

            // Verifica se o e-mail do usuário foi informado
            if (usuarioAtualizado.Email != null)
            {
                // Atribui os novos valores ao campos existentes
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }

            // Verifica se a senha do usuário foi informado
            if (usuarioAtualizado.Senha != null)
            {
                // Atribui os novos valores ao campos existentes
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            // Atualiza o tipo de usuário que foi buscado
            ctx.Usuarios.Update(usuarioBuscado);

            // Salva as informações para serem gravadas no banco
            ctx.SaveChanges();
        }

        public UsuarioDomain BuscarPorId(short id)
        {
            return ctx.Usuarios
                .Select(u => new UsuarioDomain()
                {
                    IdUsuario = u.IdUsuario,
                    Nome = u.Nome,
                    Email = u.Email,
                    IdTipoUsuario = u.IdTipoUsuario,

                    IdTipoUsuarioNavigation = new TipoUsuarioDomain()
                    {
                        IdTipoUsuario = u.IdTipoUsuarioNavigation.IdTipoUsuario,
                        Titulo = u.IdTipoUsuarioNavigation.Titulo
                    }
                })
                .FirstOrDefault(u => u.IdUsuario == id);
        }

        public void Cadastrar(UsuarioDomain novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

            public void Deletar(short id)
        {
            ctx.Usuarios.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<UsuarioDomain> Listar()
        {
            return ctx.Usuarios
                .Select(u => new UsuarioDomain()
                {
                    IdUsuario = u.IdUsuario,
                    Nome = u.Nome,
                    Email = u.Email,
                    IdTipoUsuario = u.IdTipoUsuario,

                    IdTipoUsuarioNavigation = new TipoUsuarioDomain()
                    {
                        IdTipoUsuario = u.IdTipoUsuarioNavigation.IdTipoUsuario,
                        Titulo = u.IdTipoUsuarioNavigation.Titulo
                    }
                })
                .ToList();
        }

        public UsuarioDomain Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
