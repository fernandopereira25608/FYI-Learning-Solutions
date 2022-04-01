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
    public class CursoControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public CursoControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/CursoControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CursoDomain>>> GetCursos()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/CursoControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CursoDomain>> GetCursoDomain(byte id)
        {
            var cursoDomain = await _context.Cursos.FindAsync(id);

            if (cursoDomain == null)
            {
                return NotFound();
            }

            return cursoDomain;
        }

        // PUT: api/CursoControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCursoDomain(byte id, CursoDomain cursoDomain)
        {
            if (id != cursoDomain.IdCurso)
            {
                return BadRequest();
            }

            _context.Entry(cursoDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoDomainExists(id))
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

        // POST: api/CursoControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CursoDomain>> PostCursoDomain(CursoDomain cursoDomain)
        {
            _context.Cursos.Add(cursoDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCursoDomain", new { id = cursoDomain.IdCurso }, cursoDomain);
        }

        // DELETE: api/CursoControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCursoDomain(byte id)
        {
            var cursoDomain = await _context.Cursos.FindAsync(id);
            if (cursoDomain == null)
            {
                return NotFound();
            }

            _context.Cursos.Remove(cursoDomain);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursoDomainExists(byte id)
        {
            return _context.Cursos.Any(e => e.IdCurso == id);
        }
    }
}
