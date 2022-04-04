import Logo from '../../assets/img/Logo.svg';   

function Header() {
    return (
        <div className="header">
        <img src={Logo} class="logo-inicial" />
        <div class="header-content">
          <div class="header-links">
            <a>Cursos</a>
            <a>Sobre</a>
            <a>Contato</a>
          </div>
          <button type="button" class="login-button">Login</button>
        </div>
      </div>
       );
    }
    
 export default Header;