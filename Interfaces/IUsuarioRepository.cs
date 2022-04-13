using FYI.web.Api.Domains;
using FYI.web.Api.Repositories;
using System.Collections.Generic;

namespace FYI.web.Api.Interfaces
{
    public interface IUsuarioRepository
    {
        UsuarioDomain Login(string email, string senha);

        List<UsuarioDomain> Listar();

        void Cadastrar(UsuarioDomain novoUsuario);

        void Atualizar(short id, UsuarioDomain usuarioAtualizado);

        void Deletar(short id);

        UsuarioDomain BuscarPorId(short id);

        UsuarioDomain BuscarPorEmail(string Email);
    }
}
