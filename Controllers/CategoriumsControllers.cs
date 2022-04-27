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
using Microsoft.AspNetCore.Authorization;

namespace FYI.web.Api.Controllers
{
    [Produces("application/json")]

    [Authorize(Roles = "1")]
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
            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(byte id, CategoriumDomain CategoriaAtualizada)
        {
            try
            {                
                _categoriaRepository.Atualizar(id, CategoriaAtualizada);

                return StatusCode(204);
            }
            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // DELETE: api/CategoriumsControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                _categoriaRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception x)
            {
                return BadRequest(x);

            }

        }
    }
}
