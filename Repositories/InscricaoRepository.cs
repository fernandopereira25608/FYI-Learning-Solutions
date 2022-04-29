using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Contexts;
using Microsoft.EntityFrameworkCore;

namespace FYI.web.Api.Repositories
{
    public class InscricaoRepository : IInscricaoRepository
    {


        FYIContext ctx = new FYIContext();

        public List<InscricaoDomain> Listar()
        {
            return ctx.Inscricaos.ToList();
        }

        public void Cadastrar(InscricaoDomain novaInscricao)
        {
            ctx.Inscricaos.Add(novaInscricao);

            ctx.SaveChanges();
        }

        public List<InscricaoDomain> ListarProprias(int idUsuario)
        {
            return ctx.Inscricaos
                .Include(u => u.IdUsuarioNavigation)
                .Include(u => u.IdTurmaNavigation.IdCursoNavigation)
                .Include(u => u.IdTurmaNavigation)
                .Where(u => u.IdUsuario == idUsuario)
                .ToList();
        }

        public void Deletar(int id)
        {
            InscricaoDomain inscricaoBuscada = ctx.Inscricaos.Find(id);

            ctx.Inscricaos.Remove(inscricaoBuscada);

            ctx.SaveChanges();
        }

        public void Atualizar(int id, InscricaoDomain inscricaoAtualizada)
        {
            InscricaoDomain inscricaoProcurada = ctx.Inscricaos.Find(id);

            if (inscricaoAtualizada.DataInscricao != null)
            {
                inscricaoProcurada.DataInscricao = inscricaoAtualizada.DataInscricao;
            }

            if(inscricaoProcurada.IdTurma != null)
            {
                inscricaoProcurada.IdTurma = inscricaoAtualizada.IdTurma;
            }

            ctx.Inscricaos.Update(inscricaoProcurada);

            ctx.SaveChanges();
        }

        public InscricaoDomain BuscarPorId(int id)
        {
            return ctx.Inscricaos.FirstOrDefault(tu => tu.IdInscricao == id);
        }

        public InscricaoDomain BuscarPorTurma(byte idt)
        {
            return ctx.Inscricaos.FirstOrDefault(tu => tu.IdTurmaNavigation.IdTurma == idt);
        }
    }
}
