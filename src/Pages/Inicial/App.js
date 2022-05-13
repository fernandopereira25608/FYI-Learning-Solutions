import banner from "../../Images/banner.svg";
import Medal from "../../Images/icons/Medal.svg";
import Construct from "../../Images/icons/Construct.svg";
import Student from "../../Images/icons/Student.svg";
import Cavalcante from "../../Images/empressas/cavalcante.svg";
import Empz from "../../Images/empressas/empz.svg";
import Even from "../../Images/empressas/even.svg";
import Ibmec from "../../Images/empressas/ibmec.svg";
import Ipetec from "../../Images/empressas/ipetec.svg";

import "./Inicial.css";

import React from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Cursos-Card/Card";

function Inicial() {
  return (
    <div>
      <Header />
      <div>
        <div class="inicial-image-content">
          <img src={banner} class="inicial-banner" />
        </div>
        <div class="inicial-frase">
          <p>
            DESDE 2009 O PRINCIPAL CENTRO DE TREINAMENTOS OFICIAL PARA
            MICROSOFTS DYNAMICS 365
          </p>
        </div>
        <div class="inicial-info-empresa">
          <div class="inicial-container-info">
            <div class="inicial-info-content">
              <img src={Medal} class="inicial-medal-icon" />
              <h2>10000+</h2>
              <p>Horas treinamento</p>
            </div>
            <div class="inicial-info-content">
              <img src={Student} />
              <h2>1000+</h2>
              <p>Alunos treinados</p>
            </div>
            <div class="inicial-info-content">
              <img src={Construct} />
              <h2>50+</h2>
              <p>Empresas atendidas</p>
            </div>
          </div>
        </div>
        <div class="inicial-empresas-carrosel">
          <img src={Cavalcante} class="Cavalcante-img" />
          <img src={Even} class="Even-img" />
          <img src={Empz} class="Empz-img" />
          <img src={Ibmec} class="Ibmec-img" />
          <img src={Ipetec} class="Ipetec-img" />
        </div>
        <div class="inicial-cursos-main">
          <div class="inicial-cursos-content">
            <h1>Principais Cursos:</h1>
            <div class="inicial-cards-container">
              <div class="inicial-card-content">
                <a href="#openModal1">

                <Card />
                </a>

                <div id="openModal1" class="modalDialog">
                  <div>
                    <a href="#close" title="Close" class="close">
                      X
                    </a>
                    <h2>Descrição</h2>
                    <p>
                      Este curso oferece informações detalhadas e interativas
                      sobre como desenvolver extensões para todas as versões do
                      Microsoft Dynamics, com foco em métodos de extensão
                      documentados no SDK do Microsoft Dynamics. Ele fornece
                      instruções sobre o uso de várias Operações Comuns de
                      Plataforma, sobre como consultar e executar essas
                      operações, assim como sobre o desenvolvimento do
                      entendimento dos fluxos de trabalho e da implementação do
                      processo comercial. Além disso, o curso descreve como usar
                      plug-ins, programação de evento de aplicativo, extensões
                      cliente e recursos da Web. Finalmente, ele inclui uma
                      visão geral resumida da integração entre o Windows Azure e
                      o Microsoft Dynamics.
                    </p>
                  </div>
                </div>
                <a href="#openModal2">
                <Card />

                </a>

                <div id="openModal2" class="modalDialog">
                  <div>
                    <a href="#close" title="Close" class="close">
                      X
                    </a>
                    <h2>Descrição</h2>
                    <p>
                      Este curso oferece informações detalhadas e interativas
                      sobre como desenvolver extensões para todas as versões do
                      Microsoft Dynamics, com foco em métodos de extensão
                      documentados no SDK do Microsoft Dynamics. Ele fornece
                      instruções sobre o uso de várias Operações Comuns de
                      Plataforma, sobre como consultar e executar essas
                      operações, assim como sobre o desenvolvimento do
                      entendimento dos fluxos de trabalho e da implementação do
                      processo comercial. Além disso, o curso descreve como usar
                      plug-ins, programação de evento de aplicativo, extensões
                      cliente e recursos da Web. Finalmente, ele inclui uma
                      visão geral resumida da integração entre o Windows Azure e
                      o Microsoft Dynamics.
                    </p>
                  </div>
                </div>
              </div>
              <div class="inicial-card-content">
                <a href="#openModal3">
                <Card />
                </a>
                <div id="openModal3" class="modalDialog">
                  <div>
                    <a href="#close" title="Close" class="close">
                      X
                    </a>
                    <h2>Descrição</h2>
                    <p>
                      Este curso oferece informações detalhadas e interativas
                      sobre como desenvolver extensões para todas as versões do
                      Microsoft Dynamics, com foco em métodos de extensão
                      documentados no SDK do Microsoft Dynamics. Ele fornece
                      instruções sobre o uso de várias Operações Comuns de
                      Plataforma, sobre como consultar e executar essas
                      operações, assim como sobre o desenvolvimento do
                      entendimento dos fluxos de trabalho e da implementação do
                      processo comercial. Além disso, o curso descreve como usar
                      plug-ins, programação de evento de aplicativo, extensões
                      cliente e recursos da Web. Finalmente, ele inclui uma
                      visão geral resumida da integração entre o Windows Azure e
                      o Microsoft Dynamics.
                    </p>
                  </div>
                </div>

                <a href="#openModal4">
                <Card />
                </a>
                <div id="openModal4" class="modalDialog">
                  <div>
                    <a href="#close" title="Close" class="close">
                      X
                    </a>
                    <h2>Descrição</h2>
                    <p>
                      Este curso oferece informações detalhadas e interativas
                      sobre como desenvolver extensões para todas as versões do
                      Microsoft Dynamics, com foco em métodos de extensão
                      documentados no SDK do Microsoft Dynamics. Ele fornece
                      instruções sobre o uso de várias Operações Comuns de
                      Plataforma, sobre como consultar e executar essas
                      operações, assim como sobre o desenvolvimento do
                      entendimento dos fluxos de trabalho e da implementação do
                      processo comercial. Além disso, o curso descreve como usar
                      plug-ins, programação de evento de aplicativo, extensões
                      cliente e recursos da Web. Finalmente, ele inclui uma
                      visão geral resumida da integração entre o Windows Azure e
                      o Microsoft Dynamics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inicial;

// teste