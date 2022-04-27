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
    public class CursosControllers : ControllerBase
    {
        private ICursoRepository _cursoRepository { get; set; }

        public CursosControllers()
        {
            _cursoRepository = new CursoRepository();
        }

        [Authorize(Roles = "1,2")]
        // GET: api/CursosControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
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
                _cursoRepository.Cadastrar(novoCurso);

                return StatusCode(201);
            }
            catch (Exception x)
            {
                return BadRequest(x);
            }
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(byte id, CursoDomain CursoAtualizado)
        {
            try
            {
                _cursoRepository.Atualizar(id, CursoAtualizado);

                return StatusCode(204);
            }
            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // DELETE: api/CursosControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                _cursoRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception x)
            {
                return BadRequest(x);

            }

        }
    }
}
