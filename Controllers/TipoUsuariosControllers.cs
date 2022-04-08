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

    public class TipoUsuariosControllers : ControllerBase
    {
        
        private ITipoUsuarioRepository _tipoUsuarioRepository { get; set; }

        public TipoUsuariosControllers()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }

        // GET: api/TipoUsuariosControllers
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_tipoUsuarioRepository.Listar());
            }

            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        // GET: api/TipoUsuariosControllers/5
        [HttpGet("{id}")]
        public IActionResult GetById(byte id)
        {
            try
            {
                return Ok(_tipoUsuarioRepository.BuscarPorId(id));
            }

            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // PUT: api/TipoUsuariosControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult Put(byte id, TipoUsuarioDomain tipoUsuarioAtualizado)
        {
            try
            {
                _tipoUsuarioRepository.Atualizar(id, tipoUsuarioAtualizado);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // POST: api/TipoUsuariosControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult Post(TipoUsuarioDomain novoTipousuario)
        {
            try
            {
                _tipoUsuarioRepository.Cadastrar(novoTipousuario);

                return StatusCode(201);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }

        // DELETE: api/TipoUsuariosControllers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(byte id)
        {
            try
            {
                _tipoUsuarioRepository.Deletar(id);

                return StatusCode(204);
            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }
    }
}
