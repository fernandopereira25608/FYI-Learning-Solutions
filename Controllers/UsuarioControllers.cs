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

    //adicionar comentario sobre as funcionalidades
    public class UsuarioControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public UsuarioControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/UsuarioControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioDomain>>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/UsuarioControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioDomain>> GetUsuarioDomain(short id)
        {
            var usuarioDomain = await _context.Usuarios.FindAsync(id);

            if (usuarioDomain == null)
            {
                return NotFound();
            }

            return usuarioDomain;
        }

        // PUT: api/UsuarioControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuarioDomain(short id, UsuarioDomain usuarioDomain)
        {
            if (id != usuarioDomain.IdUsuario)
            {
                return BadRequest();
            }

            _context.Entry(usuarioDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioDomainExists(id))
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

        // POST: api/UsuarioControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UsuarioDomain>> PostUsuarioDomain(UsuarioDomain usuarioDomain)
        {
            _context.Usuarios.Add(usuarioDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuarioDomain", new { id = usuarioDomain.IdUsuario }, usuarioDomain);
        }

        // DELETE: api/UsuarioControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuarioDomain(short id)
        {
            var usuarioDomain = await _context.Usuarios.FindAsync(id);
            if (usuarioDomain == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuarioDomain);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioDomainExists(short id)
        {
            return _context.Usuarios.Any(e => e.IdUsuario == id);
        }


    }
}
