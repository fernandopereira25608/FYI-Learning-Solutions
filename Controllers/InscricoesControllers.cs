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

    [Route("api/[controller]")]
    [ApiController]
    public class InscricoesControllers : ControllerBase
    {
        private IInscricaoRepository _inscricaoRepository { get; set; }

        public InscricoesControllers()
        {
            _inscricaoRepository = new InscricaoRepository();
        }

        // GET: api/InscricoesControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_inscricaoRepository.Listar());
            }

            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        // GET: api/InscricoesControllers/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_inscricaoRepository.BuscarPorId(id));
            }

            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // PUT: api/InscricoesControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Put(int id, InscricaoDomain inscricaoAtualizada)
        {
            try
            {
                _inscricaoRepository.Atualizar(id, inscricaoAtualizada);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // POST: api/InscricoesControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult Post(InscricaoDomain novaInscricao)
        {
            try
            {
                _inscricaoRepository.Cadastrar(novaInscricao);

                return StatusCode(201);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // DELETE: api/InscricoesControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _inscricaoRepository.Deletar(id);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }

        }
    }
}
