import React from "react";
import "./style.css";
import IconPessoa from "../../Images/IconPessoa.svg";
import IconTelefone from "../../Images/IconTelefone.svg";
import Header from "../../Component/Header/Header.jsx";
import Foooter from "../../Component/Footer/Footer.jsx"



const Contato = () => {
  return (
    <>

      <Header/>

      <div class="contato">
        <h1 class="titulo-contato">Fale Conosco</h1>
        <form class="form-contato">
          <label class="label-form">
            <input type="text" placeholder="Nome" />
          </label>

          <label class="label-form">
            <input type="text" placeholder="Email" />
            <span>
              <img src={IconPessoa}></img>
            </span>
          </label>

          <label class="label-form">
            <input type="text" placeholder="Telefone" />
            <span>
              <img src={IconTelefone}></img>
            </span>
          </label>

          <textarea class="form-mensagem" placeholder="Mensagem" > </textarea> 


          <div class="form-content-checkbox">
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

        <button class="button-form">
            ENVIAR
        </button>

        </form>
      </div>

      <Foooter/>
     
     
    </>
     
  );
};

export default Contato;
