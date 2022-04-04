import React from 'react'
import Logo from '../../assets/img/Logo.png';
import TelefoneFooter from '../../assets/img/telefone.png'
import EmailFooter from '../../assets/img/email.png'
import LinkdIn from '../../assets/img/LinkedIn.png'
import Facebook from '../../assets/img/Facebook.png'
import Instagram from '../../assets/img/Instagram.png'
import Youtube from '../../assets/img/YouTube.png'
import '../../pages/Cursos.css'

function Footer() {
    return (

        <footer>
            <div class="footer-containers">
                <div class="footer-content">
                    <img src={Logo} />
                </div>

                <form class="footer-contente" action="">
                    <div >
                        <h3>Contato</h3>
                    </div>

                    <div className='box-conteudos' >
                        <img class="email-footer" src={EmailFooter} />
                        <p className='pcontat'>contato@fyibrasil.com.br</p>
                    </div>

                    <div className='box-conteudoss' >
                        <img src={TelefoneFooter} class="cellphone-footer" />
                        <p>+55 (11) 3253-2529</p>
                    </div>
                </form>

                <div >

                    <div className='siga'>
                        <h3>Siga-Nos</h3>
                    </div>

                    <div className='conteudo-img'>
                        <img src={Instagram} class="social-icon" />
                        <img src={Youtube} class="social-iconss" />
                        <img src={LinkdIn} class="social-icons" />
                        <img src={Facebook} class="social-iconss" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;