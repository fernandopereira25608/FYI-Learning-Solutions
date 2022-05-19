import './Cadastro.css';
import Logo from "../../Images/Cadastro/Logo.png"
import Photo from "../../Images/Cadastro/Photo.png"

import React, { Component } from 'react';
import axios from 'axios';




export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            idTipoUsuario: 0,

            nome: '',
            empresa: '',
            email: '',
            senha: '',
        };
    };

    buscarUsuario = () => {
        axios('http://localhost:5000/api/UsuariosControllers')
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
            idTipoUsuario: 3,
            nome: this.state.nome,
            empresa: this.state.empresa,
            email: this.state.email,
            senha: this.state.senha,
        };
        axios
            .post('http://localhost:5000/api/UsuariosControllers', usuario, {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Usuario cadastrado!');
                    this.setState({ isLoading: false });
                    window.location.href = "/Login";
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarUsuario)
    }


    render() {
        return (
            <>

                <main>
                    <section className='cadastro-cor-fundo'>
                        <div className='cadastro-box-fundo'>
                            <div className='cadastro-espaco-entre'>
                                <img className='cadastro-img-logo' src={Logo} alt="" />

                                <form onSubmit={this.cadastrarUsuario} action="" className='cadastro-form'>

                                    <div className="cadastro-box-inputs">
                                        <label for=""> </label> <input type="name" name="nome" value={this.state.nome}
                                            onChange={this.atualizaStateCampo} placeholder=" Nome " />
                                    </div>

                                    <div className="cadastro-box-inputs">
                                        <label for=""> </label> <input type="text" name="empresa" value={this.state.empresa}
                                            onChange={this.atualizaStateCampo} placeholder=" Empresa(opicional) " />
                                    </div>

                                    <div className="cadastro-box-inputs">
                                        <label for=""> </label> <input type="email" name="email" value={this.state.email}
                                            onChange={this.atualizaStateCampo} placeholder=" Email " />
                                    </div>

                                    <div className="cadastro-box-inputs">
                                        <label for=""> </label> <input type="password" name="senha" value={this.state.senha}
                                            onChange={this.atualizaStateCampo} placeholder=" Senha " />
                                    </div>
                                    {/* <div className='conteudo'> */}

                                    <div>
                                        {this.state.isLoading === true && (
                                            <button className='cadastro-btn-cadastrar' type="submit">Loading...</button>
                                        )}

                                        {this.state.isLoading === false && (
                                            <button className='cadastro-btn-cadastrar' type="submit">Cadastrar</button>
                                        )}
                                        {/* <button className="cadastro-btn-cadastrar"> Cadastrar </button> */}
                                    </div>

                                </form>
                            </div>

                        </div>
                        <div className='cadastro-text'>
                            <img className='cadastro-box-photo' src={Photo} alt="img" />
                        </div>
                    </section>
                </main>
            </>
        )
    }

}