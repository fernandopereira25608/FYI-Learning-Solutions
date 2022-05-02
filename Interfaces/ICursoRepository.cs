using FYI.web.Api.Domains;
using FYI.web.Api.Repositories;
using System.Collections.Generic;

namespace FYI.web.Api.Interfaces
{
    public interface ICursoRepository
    {
        List<CursoDomain> Listar();

        void Cadastrar(CursoDomain novoCurso);

        void Atualizar(byte id, CursoDomain CursoAtualizado);

        void Deletar(byte id);

        CursoDomain BuscarPorId(byte id);

        CursoDomain BuscarPorCategoria(byte idcat);

        CursoDomain BuscarPorNome(string nomeCurso);
    }
}
