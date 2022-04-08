using FYI.web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FYI.web.Api.Interfaces
{
    public interface ITipoUsuarioRepository
    {

        List<TipoUsuarioDomain>Listar();

        void Cadastrar(TipoUsuarioDomain novoTipoUsuario);

        void Deletar(byte id);

        void Atualizar( byte id, TipoUsuarioDomain tipoUsuarioAtualizado);

        TipoUsuarioDomain BuscarPorId(byte id);
    }
}
