import './login.css';
import LoginGoogle from '../../Components/Google-Login/login'
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

import LoginButton from '../../Components/Google-Login/login';

import { useHistory } from 'react-router-dom';
import { parsejwt, UsuarioAutenticado} from "../../services/auth";
import axios from 'axios';
import { Component } from 'react';
import React from 'react';






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
                    if (parsejwt().role === '1') {
                        this.props.history.push('/Admin');
                        console.log('estou logado: ' + UsuarioAutenticado())
                    }

                    else {
                        this.props.history.push('/');
                    }
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


        return (

            <main>
                <section className='login-cor-fundo'>

                    <div className='login-img-login' ><img src={imgLogin} alt="img" /></div>

                    <div className='login-box-fundo'>
                        <div className='login-espaco-entre'>
                            <img className='login-img-logo' src={Logo} alt="" />

                            <form onSubmit={this.efetuarLogin} className='form-box'>



                                <div className="login-box-inputs">
                                    <label for="">Email:</label> <input type="email" name="email" value={this.state.email}
                                        onChange={this.atualizaStateCampo} placeholder=" Email: " />
                                </div>

                                <div className="login-box-inputs">
                                    <label for="">Senha</label> <input type="password" name="senha" value={this.state.senha}
                                        onChange={this.atualizaStateCampo} placeholder=" Senha: " />
                                </div>
                                <LoginGoogle />
                                {/* <div className='conteudo'> */}
                                <div class="login-text">
                                    <a href="#openModal">Esqueceu a senha?</a>

                                    {/* <div id="openModal" class="modalDialog">
                                        <div>
                                            <a href="#close" title="Close" class="close">X</a>
                                            <h2>Descrição</h2>
                                            <p>Este curso oferece informações detalhadas e interativas sobre como desenvolver extensões para todas as versões do Microsoft Dynamics, com foco em métodos de extensão documentados no SDK do Microsoft Dynamics. Ele fornece instruções sobre o uso de várias Operações Comuns de Plataforma, sobre como consultar e executar essas operações, assim como sobre o desenvolvimento do entendimento dos fluxos de trabalho e da implementação do processo comercial. Além disso, o curso descreve como usar plug-ins, programação de evento de aplicativo, extensões cliente e recursos da Web. Finalmente, ele inclui uma visão geral resumida da integração entre o Windows Azure e o Microsoft Dynamics.</p>
                                        </div>
                                    </div> */}

                                </div>

                                <div>

                                    <span className="Mensagem_erro">{this.state.MensagemErro}</span>
                                    {
                                        this.state.isLoading === true ? <button disabled className="login-btn-entrar">Entrando ...</button> : <button type='submit' className="login-btn-entrar ">Entrar</button>
                                    }
                                </div>

                                <div className='login-conteudinho'>

                                    <p>ou</p>

                                    {/* <h3>Cadastre-se agora</h3> */}
                                    <a>Cadastre-se agora</a>


                                </div>
                            </form>
                        </div>

                    </div>


                </section>
            </main>
        )

    }
}







