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
    public class CategoriumsControllers : ControllerBase
    {
        private readonly FYIContext _context;

        public CategoriumsControllers(FYIContext context)
        {
            _context = context;
        }

        // GET: api/CategoriumsControllers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriumDomain>>> GetCategoria()
        {
            return await _context.Categoria.ToListAsync();
        }

        // GET: api/CategoriumsControllers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriumDomain>> GetCategorium(byte id)
        {
            var categorium = await _context.Categoria.FindAsync(id);

            if (categorium == null)
            {
                return NotFound();
            }

            return categorium;
        }

        // PUT: api/CategoriumsControllers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategorium(byte id, CategoriumDomain categorium)
        {
            if (id != categorium.IdCategoria)
            {
                return BadRequest();
            }

            _context.Entry(categorium).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriumExists(id))
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

        // POST: api/CategoriumsControllers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CategoriumDomain>> PostCategorium(CategoriumDomain categorium)
        {
            _context.Categoria.Add(categorium);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategorium", new { id = categorium.IdCategoria }, categorium);
        }

        // DELETE: api/CategoriumsControllers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategorium(byte id)
        {
            var categorium = await _context.Categoria.FindAsync(id);
            if (categorium == null)
            {
                return NotFound();
            }

            _context.Categoria.Remove(categorium);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoriumExists(byte id)
        {
            return _context.Categoria.Any(e => e.IdCategoria == id);
        }
    }
}
