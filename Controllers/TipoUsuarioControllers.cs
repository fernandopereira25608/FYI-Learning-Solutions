using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FYI.webAPI.Contexts;
using FYI.webAPI.Domains;

namespace FYI.webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuarioControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public TipoUsuarioControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/TipoUsuarioControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoUsuarioDomain>>> GetTipoUsuarios()
        {
            return await _context.TipoUsuarios.ToListAsync();
        }

        // GET: api/TipoUsuarioControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoUsuarioDomain>> GetTipoUsuarioDomain(byte id)
        {
            var tipoUsuarioDomain = await _context.TipoUsuarios.FindAsync(id);

            if (tipoUsuarioDomain == null)
            {
                return NotFound();
            }

            return tipoUsuarioDomain;
        }

        // PUT: api/TipoUsuarioControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoUsuarioDomain(byte id, TipoUsuarioDomain tipoUsuarioDomain)
        {
            if (id != tipoUsuarioDomain.IdTipoUsuario)
            {
                return BadRequest();
            }

            _context.Entry(tipoUsuarioDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoUsuarioDomainExists(id))
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

        // POST: api/TipoUsuarioControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoUsuarioDomain>> PostTipoUsuarioDomain(TipoUsuarioDomain tipoUsuarioDomain)
        {
            _context.TipoUsuarios.Add(tipoUsuarioDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoUsuarioDomain", new { id = tipoUsuarioDomain.IdTipoUsuario }, tipoUsuarioDomain);
        }

        // DELETE: api/TipoUsuarioControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoUsuarioDomain(byte id)
        {
            var tipoUsuarioDomain = await _context.TipoUsuarios.FindAsync(id);
            if (tipoUsuarioDomain == null)
            {
                return NotFound();
            }

            _context.TipoUsuarios.Remove(tipoUsuarioDomain);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoUsuarioDomainExists(byte id)
        {
            return _context.TipoUsuarios.Any(e => e.IdTipoUsuario == id);
        }
    }
}
