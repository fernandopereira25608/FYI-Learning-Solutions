import logo from "../../Images/icons/Logo (1).svg";
import "./App.css";

import Footer from "../../Component/Footer/Footer.jsx"
import Header from "../../Component/Header/Header.jsx";


function Inicial() {
  return (
    <div>
      <header className="header">
        <nav class="header-nav">
          <img src={logo} class="logo-inicial" />
          <div class="header-content">
            <div class="header-links">
              <a>Cursos</a>
              <a>Sobre</a>
              <a>Contato</a>
            </div>

            <button type="button" class="login-button">
              Login
            </button>
          </div>
        </nav>
      </header>
      <main>
        <figure class="image-content">
          <div class="frase">
            <h1>Sobre a Empresa</h1>
            <h2>SOLUÇÕES DE APRENDIZAGEM</h2>

            <p>
              Desde 2009 somos o principal centro de treinamentos oficial
              Microsoft para Microsoft Dynamics 365
            </p>
          </div>
        </figure>

      
        <Header/>
        <Footer/>

      </main>

    </div>
  );
}

export default Inicial;
