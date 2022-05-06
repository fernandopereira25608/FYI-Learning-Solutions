import './login.css';
import LoginGoogle from '../../Components/Google-Login/login'
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"


import LinkedinButton from '../../Images/Login-Socials/lINKEDIN BUTTON/Retina/Button1.png'

import  { Routes, Route, Link } from 'react-router-dom'

import axios from 'axios';
import { parsejwt, UsuarioAutenticado} from "../../services/auth";
import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'petersondopagode@gmail.com',
            senha: '98765432',

            // ADM
            // petersondopagode@gmail.com,98765432
            // FUNCIONARIO
            // varejao6977@hotmail.com, 2345meia78
            // CLIENTE
            // enivaldo@email.com, 12345678

            erroMensagem: '',
            isLoading: false
        };
    };


    efetuarLogin = (event) => {
        event.preventDefault();

        this.setState({ mensagemErro: '', isLoading: true });
        axios.post('http://localhost:5000/api/LoginsControllers', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data.token)
                    localStorage.setItem('usuario-login', resposta.data.token)
                    this.setState({ isLoading: false });

                    
                    
                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    // exibe no console do navegador o valor em base64
                    console.log(base64);

                    // exibe no console o valor decodificado de base64 para string
                    // console.log(window.atob(base64));

                    // exibe no console do navegador o valor da chave role
                    // console.log( JSON.parse( window.atob(base64) ) );

                    // console.log( parseJwt().role );

                    // exibe as propriedades da página
                    console.log(this.props);

                    // verifica se o usuário logado é do tipo administrador
                    if (parsejwt().role === '1' ) {
                        this.props.history.push('/Admin');
                        console.log('estou logado: ' + UsuarioAutenticado())
                    }

                    else{
                        this.props.history.push('/');
                    }
                

                    // switch (parsejwt().role) {
                    //     case '1':
                    //         //adm
                    //         window.location.href = "/Admin";
                    //         break;
                    //     case '2':
                    //         //Moderador
                    //         this.props.history.push('/Cadastro')
                    //         break;
                    //     case '3':
                    //         //cliente
                    //         this.props.history.push('/Cursos')
                    //         break;
                    //     default:
                    //         this.props.history.push('/')
                    //         break;

                    // }
                }
            })

            .catch(() => {
                this.setState({ isLoading: false })
                this.setState({
                    erroMensagem: 'E-mail e/ou Senha inválidos!', isLoading: false,
                    // email: '',
                    // senha: ''
                }, console.log('deu errado'))
            })

    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }

    render() {

        document.title = 'FYI - Login'

        return (

            <main>
                <section className='login-cor-fundo'>

                    <div className='login-img-login' ><img src={imgLogin} alt="img" /></div>

                    <div className='login-box-fundo'>
                        <div className='login-espaco-entre'>
                            <img className='login-img-logo' src={Logo} alt="" />

                            <form onSubmit={this.efetuarLogin} className='form-box'>

                                <div className="login-box-inputs">
                                    <label for=""></label> <input type="email" name="email" value={this.state.email}
                                        onChange={this.atualizaStateCampo} placeholder=" Email: " />
                                </div>

                                <div className="login-box-inputs">
                                    <label for=""></label> <input type="password" name="senha" value={this.state.senha}
                                        onChange={this.atualizaStateCampo} placeholder=" Senha: " />
                                </div>
                                <LoginGoogle />
                                <a id="linkedin-button" class="btn btn-block btn-social btn-linkedin">
                                 <i class="fa fa-linkedin"></i> Sign in with Linkedin
                                </a>
                                {/* <div className='conteudo'>  */}
                                <div class="login-text">
                                    
                                <a href="#openModal">Esqueceu a senha?</a>

<div id="openModal" class="modalDialog">
    <div>
        <a href="#close" title="Close" class="close">X</a>
        <h2>Trocar a Senha</h2>
        <p>Identifique-se para receber um e-mail com as instruções e o link para criar uma nova senha.</p>

        

        <input placeholder="Email" class="email-estilizar" />

        

        <button class="botao-enviar">
        ENVIAR
        </button>
    </div>
</div>


                                </div>

                                <div>

                                    <span className="Mensagem_erro">{this.state.MensagemErro}</span>
                                    {
                                        this.state.isLoading === true ? <button disabled className="login-btn-entrar">Entrando ...</button> : <button type='submit' className="login-btn-entrar ">Entrar</button>
                                    }
                                </div>

                                <div className='login-conteudinho'>

                                    <p>ou</p>
                                    
                                    <Link to="Cadastro">Cadastre-se agora</Link>
                                    {/* <h3 onClick={() => history.push('/Cadastro')}>Cadastre-se agora</h3> */}

                                </div>

                            </form>
                        </div>

                    </div>


                </section>

                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                <script src="https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js"></script>
                {/* <script>
            function() {
        // Initialize with your OAuth.io app public key
        OAuth.initialize('nM2JurepEhI8TkM2TSN4buiLc5A');
        // Use popup for oauth
        OAuth.popup('linkedin2').then(linkedin => {
          console.log('linkedin:',linkedin);
          // Prompts 'welcome' message with User's email on successful login
          // #me() is a convenient method to retrieve user data without requiring you
          // to know which OAuth provider url to call
          linkedin.me().then(data => {
            console.log('me data:', data);
            alert('Linkedin says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
          })
          // Retrieves user data from OAuth provider by using #get() and
          // OAuth provider url
          linkedin.get('/v2/me').then(data => {
            console.log('self data:', data);
          })
        });
      })
    </script> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.12.0/bootstrap-social.min.css" />
            </main>
        )

    }
}