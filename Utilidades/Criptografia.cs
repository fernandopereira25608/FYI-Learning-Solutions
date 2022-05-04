namespace FYI.web.Api.Utilidades
{
    public class Criptografia
    {
        public static string ConstruirHash(string Senha)
        {
            string salt = BCrypt.Net.BCrypt.GenerateSalt(12);

            return  BCrypt.Net.BCrypt.HashPassword(Senha,salt);
        }

        public static bool Verificar(string Senha, string senha)
        {
            return BCrypt.Net.BCrypt.Verify(Senha, senha);
        }
    }
}
