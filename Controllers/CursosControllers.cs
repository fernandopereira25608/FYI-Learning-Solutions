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
    public class CursosControllers : ControllerBase
    {
        private readonly FYIContext _context;

        private ICursoRepository _cursoRepository { get; set; }

        public CursosControllers()
        {
            _cursoRepository = new CursoRepository();
        }

        // GET: api/CursosControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // Retorna a resposta da requisição fazendo a chamada para o método
                return Ok(_cursoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // GET: api/CursosControllers/5
        [HttpGet("{id}")]
        public IActionResult GetById(byte id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(_cursoRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


        [HttpPost]
        public IActionResult Post(CursoDomain novoCurso)
        {
            try
            {
                // Faz a chamada para o método
                _cursoRepository.Cadastrar(novoCurso);

                // Retorna um status code
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(byte id, CursoDomain CursoAtualizado)
        {
            try
            {
                // Faz a chamada para o método
                _cursoRepository.Atualizar(id, CursoAtualizado);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE: api/CursosControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                // Faz a chamada para o método
                _cursoRepository.Deletar(id);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }

        }
    }
}
