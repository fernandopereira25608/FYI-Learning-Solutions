import banner from '../../Images/banner.svg';
import Medal from '../../Images/icons/Medal.svg'
import Construct from '../../Images/icons/Construct.svg'
import Student from '../../Images/icons/Student.svg'
import Cavalcante from '../../Images/empressas/cavalcante.svg'
import Empz from '../../Images/empressas/empz.svg'
import Even from '../../Images/empressas/even.svg'
import Ibmec from '../../Images/empressas/ibmec.svg'
import Ipetec from '../../Images/empressas/ipetec.svg'

import './App.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Cursos-Card/Card';

function Inicial() {
  return (
    <div>
     <Header/>
      <div>
        <div class="image-content">
          <img src={banner} class="banner" />
        </div>
        <div class="frase">
          <p>DESDE 2009 O PRINCIPAL CENTRO DE TREINAMENTOS OFICIAL PARA MICROSOFTS DYNAMICS 365</p>
        </div>
        <div class="info-empresa">
          <div class="container-info">
            <div class="info-content">
              <img src={Medal} class="medal-icon" />
              <h2>10000+</h2>
              <p>Horas de treinamento</p>
            </div>
            <div class="info-content">
              <img src={Student} />
              <h2>1000+</h2>
              <p>Alunos treinados</p>
            </div>
            <div class="info-content">
              <img src={Construct} />
              <h2>50+</h2>
              <p>Empresas atendidas</p>
            </div>
          </div>
        </div>
        <div class="empresas-carrosel">
          <img src={Cavalcante} />
          <img src={Empz} />
          <img src={Even} />
          <img src={Ibmec} />
          <img src={Ipetec} />
        </div>
        <div class="cursos-main">
          <div class="cursos-content">
            <h1>Cursos:</h1>
            <div class="cursos-container">
              <Card />
              <Card />
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Inicial;
