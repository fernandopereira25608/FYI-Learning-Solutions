using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Net.Http.Headers;

namespace FYI.web.Api.Utilidades
{
    public class UploadDeImagem
    {
        /// <param name="arquivo">Arquivo vindo de um formulário</param>
        /// <param name="extensoesPermitidas">Array com extensões permitidas apenas</param>
        /// <returns>Nome do arquivo salvo</returns>
        public static string UploadFile(IFormFile arquivo, string[] extensoesAutorizadas)
        {
            try
            {
                var folder = Path.Combine("StaticFiles", "Images");
                var pathing = Path.Combine(Directory.GetCurrentDirectory(), folder);

                if (arquivo.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(arquivo.ContentDisposition).FileName.Trim('"');

                    if (ValidarExtensao(extensoesAutorizadas, fileName))
                    {
                        var extensao = RetornarExtensao(fileName);
                        var nomeNovo = $"{Guid.NewGuid()}.{extensao}";
                        var pathingCompleto = Path.Combine(pathing, nomeNovo);

                        using (var stream = new FileStream(pathingCompleto, FileMode.Create))
                        {
                            arquivo.CopyTo(stream);
                        }

                        return nomeNovo;
                    }

                    return "Extensão não permitida";
                }
                return "";
            }
            catch (Exception x)
            {
                return x.ToString();
            }
        }

        /// <summary>
        /// Valida o uso de enxtensões permitidas apenas
        /// </summary>
        /// <param name="extensoes">Array de extensões permitidas</param>
        /// <param name="nomeDoArquivo">Nome do arquivo</param>
        /// <returns>Verdadeiro/Falso</returns>
        public static bool ValidarExtensao(string[] extensoes, string nomeArquivo)
        {
            string[] data = nomeArquivo.Split(".");
            string extensao = data[data.Length - 1];

            foreach (var item in extensoes)
            {
                if (extensao == item)
                {
                    return true;
                }
            }
            return false;
        }

        public static void DeletarArquivo(string nomeArquivo)
        {
            var folder = Path.Combine("StaticFiles", "Images");
            var pathing = Path.Combine(Directory.GetCurrentDirectory(), folder);
            var pathingCompleto = Path.Combine(pathing, nomeArquivo);

            File.Delete(pathingCompleto);
        }

        public static string RetornarExtensao(string nomeDoArquivo)
        {
            string[] dados = nomeDoArquivo.Split(".");
            return dados[dados.Length - 1];
        }
    }
}
