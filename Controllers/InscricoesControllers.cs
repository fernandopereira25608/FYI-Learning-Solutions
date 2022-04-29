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
using System.IdentityModel.Tokens.Jwt;

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

        [Authorize(Roles = "1,2")]
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

        [Authorize(Roles = "1,2")]
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

        [Authorize(Roles = "1,2")]
        [HttpGet("turma{idt}")]
        public IActionResult GetByIdt(byte idt)
        {
            try
            {
                return Ok(_inscricaoRepository.BuscarPorTurma(idt));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize(Roles = "3")]
        [HttpGet("proprias")]
        public IActionResult ListarProprias()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(b => b.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_inscricaoRepository.ListarProprias(idUsuario));
            }
            catch (Exception erro)
            {
                return BadRequest(new {
                    msg = "Não foi possivel encontrar suas inscrições :(, por favor verifique se está logado!!!!", erro
                });
            }
        }



        // PUT: api/InscricoesControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "1,2")]
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

        [Authorize(Roles = "1")]
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
        [Authorize(Roles = "1,2")]
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
