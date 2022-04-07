using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Repositories;

namespace FYI.web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriumsControllers : ControllerBase
    {
        private ICategoriumRepository _categoriaRepository { get; set; }

        public CategoriumsControllers()
        {
            _categoriaRepository = new CategoriumRepository();
        }

        // GET: api/CategoriumsControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // Retorna a resposta da requisição fazendo a chamada para o método
                return Ok(_categoriaRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // GET: api/CategoriumsControllers/5
        [HttpGet("{id}")]
        public IActionResult GetById(byte id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(_categoriaRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


        [HttpPost]
        public IActionResult Post(CategoriumDomain novaCategoria)
        {
            try
            {
                // Faz a chamada para o método
                _categoriaRepository.Cadastrar(novaCategoria);

                // Retorna um status code
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(byte id, CategoriumDomain CategoriaAtualizada)
        {
            try
            {
                // Faz a chamada para o método
                _categoriaRepository.Atualizar(id, CategoriaAtualizada);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE: api/CategoriumsControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                // Faz a chamada para o método
                _categoriaRepository.Deletar(id);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }

        }

        /*private bool CategoriumExists(byte id)
        {
            return _context.Categoria.Any(e => e.IdCategoria == id);
        }*/
    }
}
