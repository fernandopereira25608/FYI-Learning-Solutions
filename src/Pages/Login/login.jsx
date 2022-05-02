import './login.css';
import LoginGoogle from '../../Components/Google-Login/login'
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

import LoginButton from '../../Components/Google-Login/login';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import React from 'react';






export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : ''
        };
    };

    
    

    efetuarLogin = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/LoginsControllers', {
            email : this.state.email,
            senha : this.state.senha
        })

        .then(resposta => {
            if (resposta.status === 200 ) {
                console.log('Login Realizado com Sucesso')
            }
        })

        .catch(() => {
            this.setState({ erroMensagem : "E-mail e/ou Senha inválidos!"})
        })
    }

    

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){

        
    return (

        <main>
            <section className='login-cor-fundo'>

                <div className='login-img-login' ><img src={imgLogin} alt="img" /></div>

                <div className='login-box-fundo'>
                    <div className='login-espaco-entre'>
                        <img className='login-img-logo' src={Logo} alt="" />

                        <form className='form-box'>



                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="email" name=" email " placeholder=" Email: " />
                            </div>

                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="password" name=" senha " placeholder=" Senha: " />
                            </div>
                            <LoginGoogle />
                            {/* <div className='conteudo'> */}
                            <div class="login-text">
                                <a href="#openModal">Esqueceu a senha?</a>

<div id="openModal" class="modalDialog">
    <div>
        <a href="#close" title="Close" class="close">X</a>
        <h2>Descrição</h2>
        <p>Este curso oferece informações detalhadas e interativas sobre como desenvolver extensões para todas as versões do Microsoft Dynamics, com foco em métodos de extensão documentados no SDK do Microsoft Dynamics. Ele fornece instruções sobre o uso de várias Operações Comuns de Plataforma, sobre como consultar e executar essas operações, assim como sobre o desenvolvimento do entendimento dos fluxos de trabalho e da implementação do processo comercial. Além disso, o curso descreve como usar plug-ins, programação de evento de aplicativo, extensões cliente e recursos da Web. Finalmente, ele inclui uma visão geral resumida da integração entre o Windows Azure e o Microsoft Dynamics.</p>
    </div>
</div> 

                            </div>

                            <div>
                                <button className="login-btn-entrar"> Entrar </button>
                                <p style={{ color : 'red' }}>{this.state.erroMensagem}</p>
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







