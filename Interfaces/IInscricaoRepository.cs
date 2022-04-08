using FYI.web.Api.Repositories;
using FYI.web.Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FYI.web.Api.Interfaces
{
    public interface IInscricaoRepository
    {

        List<InscricaoDomain> Listar();

        void Cadastrar(InscricaoDomain novaInscricao);

        void Deletar(int id);

        void Atualizar(int id, InscricaoDomain inscricaoAtualizada);

        InscricaoDomain BuscarPorId(int id);
    }
}
