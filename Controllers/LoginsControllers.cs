using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using FYI.web.Api.Interfaces;
using FYI.web.Api.Repositories;
using FYI.web.Api.ViewModels;
using FYI.web.Api.Domains;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace FYI.web.Api.Controllers
{

    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class LoginsControllers : ControllerBase
    {

        protected IUsuarioRepository _usuarioRepository { get; set; }

        public LoginsControllers()
        {
            _usuarioRepository = new UsuarioRepository();
        }
       
        //POST api/LoginsControllers
        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                UsuarioDomain usuarioProcurado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioProcurado == null)
                {
                    return BadRequest("Não foi encontrada nenhuma conta com estas informações :( , talvez você tenha inserido alguma informação errada!!!!");
                }

                var _Claims = new[]
               {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioProcurado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioProcurado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioProcurado.IdTipoUsuario.ToString()),

                    new Claim("role", usuarioProcurado.IdTipoUsuario.ToString()),

                    new Claim(JwtRegisteredClaimNames.Name, usuarioProcurado.Nome)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("FYI-key-authentication"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var _Token = new JwtSecurityToken(
                        issuer: "FYI.web.Api",
                        audience: "FYI.web.Api",
                        claims: _Claims,
                        expires: DateTime.Now.AddMinutes(90),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(_Token)
                });

            }

            catch (Exception x)
            {
                return BadRequest(x);
            }
        }
    }
}
