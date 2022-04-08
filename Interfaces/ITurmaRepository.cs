using FYI.web.Api.Repositories;
using FYI.web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FYI.web.Api.Interfaces
{
    public interface ITurmaRepository
    {
        List<TurmaDomain> Listar();

        void Cadastrar(TurmaDomain novaTurma);

        void Deletar(byte id);

        void Atualizar(byte id, TurmaDomain turmaAtualizada);

        TurmaDomain BuscarPorId(byte id);

    }
}
