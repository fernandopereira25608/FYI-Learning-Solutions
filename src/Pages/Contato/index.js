import React from "react";
import "./style.css";
import IconPessoa from "../../Images/Contato/IconPessoa.svg";
import IconTelefone from "../../Images/Contato/IconTelefone.svg";
import Header from "../../Components/Header/Header.jsx";
import Foooter from "../../Components/Footer/Footer.jsx"



const Contato = () => {
  return (
    <>

      <Header/>

      <div class="contact-contato">
        <h1 class="contact-titulo-contato">Fale Conosco</h1>
        <form class="contact-form-contato">
          <label class="contact-label-form">
            <input type="text" placeholder="Nome" />
          </label>

          <label class="contact-label-form">
            <input type="text" placeholder="Email" />
            <span>
              <img src={IconPessoa}></img>
            </span>
          </label>

          <label class="contact-label-form">
            <input type="text" placeholder="Telefone" />
            <span>
              <img src={IconTelefone}></img>
            </span>
          </label>

          <textarea class="contact-form-mensagem" placeholder="Mensagem" > </textarea> 


          <div class="contact-form-content-checkbox">
            <label>
              <input type="radio" />
              <span>Deseja receber informações e promoções da FYI?</span>
            </label>
          
            <label>
              <input type="radio" />
              <span>
                Informo que eu Li e aceito a politica de provacidade da FYI?
              </span>
            </label>
        </div>

        <button class="contact-button-form">
            ENVIAR
        </button>

        </form>
      </div>

      <Foooter/>
     
     
    </>
     
  );
};

export default Contato;
