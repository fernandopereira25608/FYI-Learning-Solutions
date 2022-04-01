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
    public class TurmaControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public TurmaControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/TurmaControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TurmaDomain>>> GetTurmas()
        {
            return await _context.Turmas.ToListAsync();
        }

        // GET: api/TurmaControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TurmaDomain>> GetTurmaDomain(byte id)
        {
            var turmaDomain = await _context.Turmas.FindAsync(id);

            if (turmaDomain == null)
            {
                return NotFound();
            }

            return turmaDomain;
        }

        // PUT: api/TurmaControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTurmaDomain(byte id, TurmaDomain turmaDomain)
        {
            if (id != turmaDomain.IdTurma)
            {
                return BadRequest();
            }

            _context.Entry(turmaDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurmaDomainExists(id))
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

        // POST: api/TurmaControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TurmaDomain>> PostTurmaDomain(TurmaDomain turmaDomain)
        {
            _context.Turmas.Add(turmaDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTurmaDomain", new { id = turmaDomain.IdTurma }, turmaDomain);
        }

        // DELETE: api/TurmaControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTurmaDomain(byte id)
        {
            var turmaDomain = await _context.Turmas.FindAsync(id);
            if (turmaDomain == null)
            {
                return NotFound();
            }

            _context.Turmas.Remove(turmaDomain);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TurmaDomainExists(byte id)
        {
            return _context.Turmas.Any(e => e.IdTurma == id);
        }
    }
}
