using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FYI.web.Api.Repositories
{
    public class CategoriumRepository : ICategoriumRepository
    {
        FYIContext ctx = new FYIContext();
        public void Atualizar(byte id, CategoriumDomain CategoriaAtualizada)
        {

            CategoriumDomain CategoriaProcurada = ctx.Categoria.Find(id);
           
            if (CategoriaAtualizada.Titulo != null)
            {
                CategoriaProcurada.Titulo = CategoriaAtualizada.Titulo;
            }
            ctx.Categoria.Update(CategoriaProcurada);

            ctx.SaveChanges();
        }


        public CategoriumDomain BuscarPorId(byte id)
        {
            return ctx.Categoria.FirstOrDefault(e => e.IdCategoria == id);
        }

        public CategoriumDomain BuscarPorTitulo(string titulo)
        {
            return ctx.Categoria.FirstOrDefault(k => k.Titulo == titulo);
        }

        public void Cadastrar(CategoriumDomain novaCategoria)
        {
            ctx.Categoria.Update(novaCategoria);
            ctx.SaveChanges();
        }

        public void Deletar(byte id)
        {
            ctx.Categoria.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<CategoriumDomain> Listar()
        {
            return ctx.Categoria.ToList();
        }
    }
}
