import './login.css';
import LoginGoogle from '../../Components/Google-Login/login'
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

import LoginButton from '../../Components/Google-Login/login';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import React from 'react';






    function Login() {

        const history = useHistory();

    // efetuarLogin = (event) => {
    //     event.preventDefault();

    //     axios.post('http://localhost:5000/api/LoginsControllers', {
    //         email: this.state.email,
    //         senha: this.state.senha
    //     })

    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log('Login Realizado com Sucesso')
    //             }
    //         })

    //         .catch(() => {
    //             this.setState({ erroMensagem: "E-mail e/ou Senha inválidos!" })
    //         })
    // }



    // atualizaStateCampo = (campo) => {
    //     this.setState({ [campo.target.name]: campo.target.value })
    // }

        return (

            <main>
                <section className='login-cor-fundo'>

                    <div ><img src={imgLogin} alt="img" /></div>

                    <div className='login-box-fundo'>
                        <div className='login-espaco-entre'>
                            <img className='login-img-logo' src={Logo} alt="" className='login-img-login' onClick={() => history.push('/')}/>

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
                                    <h3>Esqueceu a senha?</h3>
                                </div>

                                <div>
                                    <button className="login-btn-entrar"> Entrar </button>
                                    {/* <p style={{ color: 'red' }}>{this.state.erroMensagem}</p> */}
                                </div>

                                <div className='login-conteudinho'>

                                    <p>ou</p>

                                    {/* <h3>Cadastre-se agora</h3> */}
                                    <a onClick={() => history.push('/Cadastro')}>Cadastre-se agora</a>


                                </div>
                            </form>
                        </div>

                    </div>


                </section>
            </main>
        )

    }

    export default Login;







