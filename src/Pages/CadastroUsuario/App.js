import axios from "axios";
import React, { Component } from "react";

import Logo from "../../Images/Cadastro/Logo.png";

import './CadastroUsuarioStyle.css'

export default class CadastroUsuario extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            idTipoUsuario: 0,
            nome: '',
            email: '',
            senha: '',
            empresa: '',
        };
    };

    buscarUsuario = () => {
        axios('https://fyiapi.azurewebsites.net/api/Usuario/Listar')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ ListarUsuario: resposta.data });
                    console.log(this.state.ListarUsuario)
                }
            })
            .catch((erro) => console.log(erro));
    };

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
    };

    cadastrarUsuario = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        let usuario = {
            idTipoUsuario: 2,
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            empresa: this.state.empresa,
            
        };
        axios
            .post('https://fyiapi.azurewebsites.net/api/Usuario', usuario, {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 200) {
                    console.log('Turma cadastrada!');
                    this.setState({ isLoading: false });
                    // window.location.href = "/Admin";

                    return(
                        <div>
                            <p>deu certo</p>
                        </div>
                    )
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarUsuario)
    }

    render() {
        return(
            <>
            
            <div className="cadastro-curso-main">
                <div className="cadastro-curso-title">
                    <h1>Cadastro de Usuarios</h1>
                    <div className="cadastro-curso-container">
                        <div className="cadastro-curso-container-items">

                            <form onSubmit={this.cadastrarUsuario} action="" className="cadastro-curso-container-form">

                            <img src={Logo} className="cadastro-curso-container-items-logo"/>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="name" name="nome" placeholder=" Nome Usuario " value={this.state.nome} onChange={this.atualizaStateCampo}/>
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="email" name="email" placeholder=" Email Usuario " value={this.state.email} onChange={this.atualizaStateCampo} />
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="password" name="senha" placeholder="Senha Usuario" value={this.state.senha} onChange={this.atualizaStateCampo} />
                            </div>

                            <div>
                                <button className="cadastro-curso-container-items-button" type="submit"> Cadastrar </button>
                            </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}