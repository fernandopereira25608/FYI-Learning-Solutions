import React from "react"
import "./style.css"
import Imagep05 from "../../Images/InfoEmpresa/Imagep05.svg";
import Imagep06 from "../../Images/InfoEmpresa/Imagep06.svg";
import Imagep07 from "../../Images/InfoEmpresa/Imagep07.svg";
import Header from "../../Components/Header/Header.jsx";
import Banner from "../../Images/banner.svg";
import Footer from "../../Components/Footer/Footer.jsx"

const InfoEmpresa = () => {
    return (
    <>
    <Header/>

      <img src={Banner} class="banner-sobre"/>
    <section class="sobre-Content-info">
          <div class="sobre-Content-info-article">
            <article class="sobre-info-empresa">
    
              <p>
                A FYI nasceu em 2009 com a missão de formar excelentes
                profissionais para as principais soluções de negócios e
                tecnologia da Microsoft.
              </p>
              <br />

              <p>
                A empresa, com seus treinamentos consultivos e com foco tanto na
                capacitação técnica quanto na formação de novos consultores, nos
                últimos anos, vem cumprindo seu papel de formação, tornando-se o
                principal Centro de Treinamento em Tecnologias Microsoft do
                Brasil para negócio, colaboração, desenvolvimento, gerenciamento
                e business intelligence.
              </p>
              <br />
              <p>
                Em sua trajetória vem se firmando como uma aliada na formação e
                capacitação de novos profissionais para o Network Microsoft com
                a criação da Academia de Talentos, um processo seletivo que, em
                todas as suas edições, já formou mais de 860 novos consultores,
                não só no Brasil, mas também para a América Latina.
              </p>
              <br />
              <p>
                Em seu espaço de negócio, conta com os melhores treinadores,
                conteúdos, com toda a infraestrutura em ambiente corporativo.
              </p>
              <br />

              <div class="sobre-content-paragrafo">
                <figure class="sobre-content-image-paragrafo">
                  <img
                    src={Imagep05}
                    alt="Pessoas na sala tirando dúvida"
                  ></img>
                </figure>

                <div>
                  <p>
                    Como fornecedores de treinamentos, reconhecemos a
                    responsabilidade envolvida na qualidade de entrega dos
                    cursos para o bom desenvolvimento do potencial de cada
                    indivíduo e lutamos por isso.
                  </p>

                  <br />

                  <p>
                    Com a criação de trilhas de capacitação, disponibilizamos os
                    cursos adequados para cada perfil fornecendo todo o apoio
                    necessário para o profissional em busca de sua certificação.
                  </p>
                </div>
              </div>

              <div class="sobre-content-paragrafo">
                <div>
                  <p>
                    Inaugurando uma nova modalidade de CPLS (Microsoft Certified
                    Partner Learning Solutions) , a FYI surge como a principal
                    opção para pessoas físicas e jurídicas interessadas em
                    desenvolver competências Dynamics.
                  </p>

                  <br />

                  <p>
                    Além disso, atuamos na capacitação das principais soluções
                    de colaboração, desenvolvimento, gerenciamento e business
                    intelligence da plataforma Microsoft.
                  </p>
                </div>

                <figure class="sobre-content-image-paragrafo">
                  <img
                    src={Imagep06}
                    alt="Pessoas na sala tirando dúvida"
                  ></img>
                </figure>
              </div>

              <div class="sobre-content-paragrafo">
                <figure class="sobre-content-image-paragrafo">
                  <img
                    src={Imagep07}
                    alt="Pessoas na sala tirando dúvida"
                  ></img>
                </figure>
                <div>
                  <p>
                    Aliando conteúdo e estratégias lúdicas de capacitação, a FYI
                    também contribui com Universidades e Organizações na entrega
                    de Jogos Empresariais que promovem maior absorção de
                    conhecimento por meio da experimentação do dia-a-dia de
                    negócios.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        
      <Footer/>
    </>

    
    )

}
export default InfoEmpresa