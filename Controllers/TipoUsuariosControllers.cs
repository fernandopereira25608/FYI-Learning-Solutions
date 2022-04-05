using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FYI.web.Api.Contexts;
using FYI.web.Api.Domains;

namespace FYI.web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuariosControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public TipoUsuariosControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/TipoUsuariosControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoUsuarioDomain>>> GetTipoUsuarios()
        {
            return await _context.TipoUsuarios.ToListAsync();
        }

        // GET: api/TipoUsuariosControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoUsuarioDomain>> GetTipoUsuario(byte id)
        {
            var tipoUsuario = await _context.TipoUsuarios.FindAsync(id);

            if (tipoUsuario == null)
            {
                return NotFound();
            }

            return tipoUsuario;
        }

        // PUT: api/TipoUsuariosControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoUsuario(byte id, TipoUsuarioDomain tipoUsuario)
        {
            if (id != tipoUsuario.IdTipoUsuario)
            {
                return BadRequest();
            }

            _context.Entry(tipoUsuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoUsuarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TipoUsuariosControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoUsuarioDomain>> PostTipoUsuario(TipoUsuarioDomain tipoUsuario)
        {
            _context.TipoUsuarios.Add(tipoUsuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoUsuario", new { id = tipoUsuario.IdTipoUsuario }, tipoUsuario);
        }

        // DELETE: api/TipoUsuariosControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoUsuario(byte id)
        {
            var tipoUsuario = await _context.TipoUsuarios.FindAsync(id);
            if (tipoUsuario == null)
            {
                return NotFound();
            }

            _context.TipoUsuarios.Remove(tipoUsuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoUsuarioExists(byte id)
        {
            return _context.TipoUsuarios.Any(e => e.IdTipoUsuario == id);
        }
    }
}
