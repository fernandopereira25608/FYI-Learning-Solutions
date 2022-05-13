import React from 'react'
import logo from '../../Images/Logo.svg';
import TelefoneFooter from '../../Images/icons/telefone.png'
import EmailFooter from '../../Images/icons/email.png'
import LinkdIn from '../../Images/socials/LinkedIn.png'
import Facebook from '../../Images/socials/Facebook.png'
import Instagram from '../../Images/socials/Instagram.png'
import Youtube from '../../Images/socials/Youtube.png'
import './Footer.css'



function Footer() {
    return (

        <footer>
            <div class="footer-containers">
                <div class="footer-content">
                    <img src={logo} />
                </div>

                <div class="footer-contente">
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
                </div>

                <div >

                    <div className='siga'>
                        <h3>Siga-Nos</h3>
                    </div>

                    <div className='conteudo-img'>
                        <a href="https://www.instagram.com/fyibrasil/"> <img src={Instagram} class="social-icon" /> </a>
                        <a href="https://www.youtube.com/channel/UCF4AwPhPju8tJTyFcHlZwsQ"> <img src={Youtube} class="social-iconss" /> </a>
                        <a href="https://br.linkedin.com/company/fyi-learning-solutions"> <img src={LinkdIn} class="social-icons" /> </a>
                        <a href="https://pt-br.facebook.com/FYIBrasil/"> <img src={Facebook} class="social-iconss" /> </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;