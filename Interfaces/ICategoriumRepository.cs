using FYI.web.Api.Domains;
using FYI.web.Api.Repositories;
using System.Collections.Generic;

namespace FYI.web.Api.Interfaces
{
    public interface ICategoriumRepository
    {
        List<CategoriumDomain> Listar();

        void Cadastrar(CategoriumDomain novaCategoria);

        void Atualizar(byte id, CategoriumDomain CategoriaAtualizada);

        void Deletar(byte id);

        CategoriumDomain BuscarPorId(byte id);
    }
}
