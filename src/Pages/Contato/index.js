import React from "react";
import "./style.css";
import IconPessoa from "../../Images/Contato/IconPessoa.svg";
import IconTelefone from "../../Images/Contato/IconTelefone.svg";
import Header from "../../Components/Header/Header.jsx";
import Foooter from "../../Components/Footer/Footer.jsx"

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'



const Contato = () => {
  

  return (
    <>

      <Header />
      <div >
        <div className="box-conteudo">
          <div class="contact-contato">
            <h1 class="contact-titulo-contato">Fale Conosco</h1>
            <form class="contact-form-contato">
              <label class="contact-label-form">
                <input type="text" placeholder="Nome" />
              </label>

              <label class="contact-label-form">
                <input type="text" placeholder="Email" />
                <span className="spanzinho">
                  <img class="icon-label" src={IconPessoa}></img>
                </span>
              </label>

              <label class="contact-label-form">
                <input type="text" placeholder="Telefone" />
                <span className="spanzinho">
                  <img class="icon-label" src={IconTelefone}></img>
                </span>
              </label>

              <textarea class="contact-form-mensagem" placeholder="Mensagem"  ></textarea>
             


              <div class="contact-form-content-checkbox">
                <label>
                  <input type="checkbox" />
                  <span>Deseja receber informações e promoções da FYI?</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>
                    Informo que eu Li e aceito a politica de provacidade da FYI?
                  </span>
                </label>
              </div>

              <button class="contact-button-form">
                enviar
              </button>

            </form>
          </div>

          <div>
          <iframe class= 'map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.6337821805823!2d-46.658931!3d-23.558832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd102004fb%3A0x18040d33d46a99aa!2sAv.%20Paulista%2C%202006%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1650376776092!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </div>

      </div>

       
      <Foooter />


    </>

  );
};

export default Contato;
