using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;
using Microsoft.AspNetCore.Authorization;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Repositories;

namespace FYI.web.Api.Controllers
{
    [Produces("application/json")]

    [Authorize(Roles = "1,2")]
    [Route("api/[controller]")]
    [ApiController]
    public class TurmasControllers : ControllerBase
    {
        private ITurmaRepository _turmaRepository { get; set; }

        public TurmasControllers()
        {
            _turmaRepository = new TurmaRepository();
        }

        // GET: api/TurmasControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_turmaRepository.Listar());
            }

            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        // GET: api/TurmasControllers/5
        [HttpGet("{id}")]
        public IActionResult GetById(byte id)
        {
            try
            {
                return Ok(_turmaRepository.BuscarPorId(id));
            }

            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // PUT: api/TurmasControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Put(byte id, TurmaDomain turmaAtualizada)
        {
            try
            {
                _turmaRepository.Atualizar(id, turmaAtualizada);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // POST: api/TurmasControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult Post(TurmaDomain novaTurma)
        {
            try
            {
                _turmaRepository.Cadastrar(novaTurma);

                return StatusCode(201);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // DELETE: api/TurmasControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                _turmaRepository.Deletar(id);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }
    }
}
