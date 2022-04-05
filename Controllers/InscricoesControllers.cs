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
    public class InscricoesControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public InscricoesControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/InscricoesControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InscricaoDomain>>> GetInscricaos()
        {
            return await _context.Inscricaos.ToListAsync();
        }

        // GET: api/InscricoesControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InscricaoDomain>> GetInscricao(int id)
        {
            var inscricao = await _context.Inscricaos.FindAsync(id);

            if (inscricao == null)
            {
                return NotFound();
            }

            return inscricao;
        }

        // PUT: api/InscricoesControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInscricao(int id, InscricaoDomain inscricao)
        {
            if (id != inscricao.IdInscricao)
            {
                return BadRequest();
            }

            _context.Entry(inscricao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InscricaoExists(id))
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

        // POST: api/InscricoesControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InscricaoDomain>> PostInscricao(InscricaoDomain inscricao)
        {
            _context.Inscricaos.Add(inscricao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInscricao", new { id = inscricao.IdInscricao }, inscricao);
        }

        // DELETE: api/InscricoesControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInscricao(int id)
        {
            var inscricao = await _context.Inscricaos.FindAsync(id);
            if (inscricao == null)
            {
                return NotFound();
            }

            _context.Inscricaos.Remove(inscricao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InscricaoExists(int id)
        {
            return _context.Inscricaos.Any(e => e.IdInscricao == id);
        }
    }
}
