import "./login.css";
import LoginGoogle from "../../Components/Google-Login/login";
import imgLogin from "../../Images/Login/imgLogin.png";
import Logo from "../../Images/Login/Logo.png";

import { Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import { parsejwt, UsuarioAutenticado } from "../../services/auth";
import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",

      // ADM
      // petersondopagode@gmail.com,98765432
      // FUNCIONARIO
      // varejao6977@hotmail.com, 2345meia78
      // CLIENTE
      // enivaldo@email.com, 12345678

      erroMensagem: "",
      isLoading: false,
    };
  }

  efetuarLogin = (event) => {
    event.preventDefault();

    this.setState({ mensagemErro: "", isLoading: true });
    axios
      .post("https://fyiapi.azurewebsites.net/api/Login", {
        email: this.state.email,
        senha: this.state.senha,
      })

      .then((resposta) => {
        if (resposta.status === 200) {
          console.log(resposta.data.token);
          localStorage.setItem("usuario-login", resposta.data.token);
          this.setState({ isLoading: false });

          let base64 = localStorage.getItem("usuario-login").split(".")[1];
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
          if (parsejwt().role === "1") {
            this.props.history.push("/Admin");
            console.log("estou logado: " + UsuarioAutenticado());
          } else {
            this.props.history.push("/");
          }
        }
      })

      .catch(() => {
        this.setState({ isLoading: false });
        this.setState(
          {
            erroMensagem: "E-mail e/ou Senha inválidos!",
            isLoading: false,
            // email: '',
            // senha: ''
          },
          console.log("deu errado")
        );
      });
  };

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };

  render() {
    document.title = "FYI - Login";

    return (
      <main>
        <section className="login-cor-fundo">
          <div className="login-img-login">
            <img src={imgLogin} alt="img" />
          </div>
          <div className="login-box-fundo">
            <div className="login-espaco-entre">
              <img className="login-img-logo" src={Logo} />
              <form onSubmit={this.efetuarLogin} className="form-box">
                <div className="login-box-inputs">
                  <label for=""></label>{" "}
                  <input
                    type="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.atualizaStateCampo}
                    placeholder=" Email: "
                  />
                  {/* {efetuarLogin && form["email"]== "" ? <span>o campo precisa ser preenchido</span> : ""} */}
                </div>

                <div className="login-box-inputs">
                  <label for=""></label>{" "}
                  <input
                    type="password"
                    name="senha"
                    required
                    value={this.state.senha}
                    onChange={this.atualizaStateCampo}
                    placeholder=" Senha: "
                  />
                </div>
                <LoginGoogle />

                <Link to={'/Forgot'}><a>Esqueceu a senha?</a></Link>
               

                

                <div>
                  <span className="Mensagem_erro">
                    {this.state.MensagemErro}
                  </span>
                  {this.state.isLoading === true ? (
                    <button disabled className="login-btn-entrar">
                      Entrando ...
                    </button>
                  ) : (
                    <button type="submit" className="login-btn-entrar ">
                      Entrar
                    </button>
                  )}
                </div>
                <div className="login-conteudinho">
                  <Link to="Cadastro">Cadastre-se agora</Link>

                  <p>ou</p>

                  <Link to="">Voltar para Inicial</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
