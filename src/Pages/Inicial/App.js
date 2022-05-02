import banner from '../../Images/banner.svg';
import Medal from '../../Images/icons/Medal.svg'
import Construct from '../../Images/icons/Construct.svg'
import Student from '../../Images/icons/Student.svg'
import Cavalcante from '../../Images/empressas/cavalcante.svg'
import Empz from '../../Images/empressas/empz.svg'
import Even from '../../Images/empressas/even.svg'
import Ibmec from '../../Images/empressas/ibmec.svg'
import Ipetec from '../../Images/empressas/ipetec.svg'

import './Inicial.css';

import React from 'react';


import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Cursos-Card/Card';

function Inicial() {
  return (
    <div>
     <Header/>
      <div>
        <div class="inicial-image-content">
          <img src={banner} class="inicial-banner" />
        </div>
        <div class="inicial-frase">
          <p>DESDE 2009 O PRINCIPAL CENTRO DE TREINAMENTOS OFICIAL PARA MICROSOFTS DYNAMICS 365</p>
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
          <img src={Cavalcante} class="Cavalcante-img"/>
          <img src={Even} class="Even-img"/>
          <img src={Empz} class="Empz-img"/>
          <img src={Ibmec} class="Ibmec-img"/>
          <img src={Ipetec} class="Ipetec-img"/>
        </div>
        <div class="inicial-cursos-main">
          <div class="inicial-cursos-content">
          <h1>Cursos:</h1>
            <div class="inicial-cards-container">
              <div class="inicial-card-content">
                <Card />
                <Card />    
              </div>
              <div class="inicial-card-content">
                <Card />
                <Card />
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Inicial;

// teste