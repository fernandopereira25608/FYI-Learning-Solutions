import banner from '../../Images/banner.svg';
import logo from '../../Images/Logo.svg';
import './App.css';

function Inicial() {
  return (
    <div>
    <div className="header">
      <img src={logo} class="logo-inicial"/>
        <div class="header-content">
          <div class="header-links">
            <a>Cursos</a>
            <a>Sobre</a>
            <a>Contato</a>
          </div>
          <button type="button" class="login-button">Login</button>
        </div>
    </div>
    <main>
      <div class="image-content">
        <img src={banner} class="banner"/>
      </div>
      <div class="frase">
        <p>DESDE 2009 O PRINCIPAL CENTRO DE TREINAMENTOS OFICIAL PARA MICROSOFTS DYNAMICS 365</p>
      </div>
      <div class="info-empresa">

      </div>
    </main>
    </div>
  );
}

export default Inicial;
