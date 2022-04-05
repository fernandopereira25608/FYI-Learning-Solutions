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