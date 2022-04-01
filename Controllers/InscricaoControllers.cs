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
    public class InscricaoControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public InscricaoControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/InscricaoControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InscricaoDomain>>> GetInscricaos()
        {
            return await _context.Inscricaos.ToListAsync();
        }

        // GET: api/InscricaoControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InscricaoDomain>> GetInscricaoDomain(int id)
        {
            var inscricaoDomain = await _context.Inscricaos.FindAsync(id);

            if (inscricaoDomain == null)
            {
                return NotFound();
            }

            return inscricaoDomain;
        }

        // PUT: api/InscricaoControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInscricaoDomain(int id, InscricaoDomain inscricaoDomain)
        {
            if (id != inscricaoDomain.IdInscricao)
            {
                return BadRequest();
            }

            _context.Entry(inscricaoDomain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InscricaoDomainExists(id))
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

        // POST: api/InscricaoControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InscricaoDomain>> PostInscricaoDomain(InscricaoDomain inscricaoDomain)
        {
            _context.Inscricaos.Add(inscricaoDomain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInscricaoDomain", new { id = inscricaoDomain.IdInscricao }, inscricaoDomain);
        }

        // DELETE: api/InscricaoControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInscricaoDomain(int id)
        {
            var inscricaoDomain = await _context.Inscricaos.FindAsync(id);
            if (inscricaoDomain == null)
            {
                return NotFound();
            }

            _context.Inscricaos.Remove(inscricaoDomain);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InscricaoDomainExists(int id)
        {
            return _context.Inscricaos.Any(e => e.IdInscricao == id);
        }
    }
}
