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
    public class TurmasControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public TurmasControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/TurmasControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TurmaDomain>>> GetTurmas()
        {
            return await _context.Turmas.ToListAsync();
        }

        // GET: api/TurmasControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TurmaDomain>> GetTurma(byte id)
        {
            var turma = await _context.Turmas.FindAsync(id);

            if (turma == null)
            {
                return NotFound();
            }

            return turma;
        }

        // PUT: api/TurmasControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTurma(byte id, TurmaDomain turma)
        {
            if (id != turma.IdTurma)
            {
                return BadRequest();
            }

            _context.Entry(turma).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurmaExists(id))
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

        // POST: api/TurmasControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TurmaDomain>> PostTurma(TurmaDomain turma)
        {
            _context.Turmas.Add(turma);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTurma", new { id = turma.IdTurma }, turma);
        }

        // DELETE: api/TurmasControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTurma(byte id)
        {
            var turma = await _context.Turmas.FindAsync(id);
            if (turma == null)
            {
                return NotFound();
            }

            _context.Turmas.Remove(turma);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TurmaExists(byte id)
        {
            return _context.Turmas.Any(e => e.IdTurma == id);
        }
    }
}
