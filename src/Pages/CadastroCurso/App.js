import axios from "axios";
import React, { Component } from "react";

import Logo from "../../Images/Cadastro/Logo.png";

import './CadastroCurso.css'

export default class CadastroCurso extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            idCurso: 0,

            nomeCurso: '',
            nomeCategoria: '',
            descricao: '',
            // cargaHoraria: '',
            vagasDisponiveis: '',
            vagasPreenchidas: '',
        };
    };

    buscarCurso = () => {
        axios('http://localhost:5000/api/CursosControllers')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ ListarCurso: resposta.data });
                    console.log(this.state.ListarCurso)
                }
            })
            .catch((erro) => console.log(erro));
    };

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
    };

    cadastrarCurso = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        let curso = {
            nomeCurso: this.state.nomeCurso,
            nomeCategoria: this.state.nomeCategoria,
            descricao: this.state.descricao,
            // cargaHoraria: this.state.cargaHoraria,
            vagasDisponiveis: this.state.vagasDisponiveis,
            vagasPreenchidas: this.state.vagasPreenchidas,
        };
        axios
            .post('http://localhost:5000/api/CursosControllers', curso, {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Curso cadastrado!');
                    this.setState({ isLoading: false });
                    window.location.href = "/Admin";
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarCurso)
    }

    render() {
        return(
            <>
            <div className="cadastro-curso-main">
                <div className="cadastro-curso-title">
                    <h1>Cadastro de Cursos</h1>
                    <div className="cadastro-curso-container">
                        <div className="cadastro-curso-container-items">

                            <form onSubmit={this.cadastrarCurso} action="" className="cadastro-curso-container-form">

                            <img src={Logo} className="cadastro-curso-container-items-logo"/>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="name" name="nomeCurso" placeholder=" Nome Curso " value={this.state.nomeCurso} onChange={this.atualizaStateCampo}/>
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> 
                                    <select name="TipoCategoria" placeholder=" Categoria " value={this.state.nomeCategoria} onChange={this.atualizaStateCampo}>
                                        <option value={this.state.nomeCategoria}>Microsoft</option>
                                        <option value={this.state.nomeCategoria}>Back-End</option>
                                        <option value={this.state.nomeCategoria}>Front-End</option>
                                        <option value={this.state.nomeCategoria}>Database</option>
                                    </select>
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name="descricao" placeholder=" Descrição " value={this.state.descricao} onChange={this.atualizaStateCampo} />
                            </div>

                            {/* <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="time" name="cargaHoraria" placeholder=" Carga Horaria " value={this.state.cargaHoraria} onChange={this.atualizaStateCampo}/>
                            </div> */}

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name="vagasDisponiveis" placeholder=" Vagas Disponiveis " value={this.state.vagasDisponiveis} onChange={this.atualizaStateCampo}/>
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name="vagasPreenchidas" placeholder=" Vagas Preenchidas "  value={this.state.vagasPreenchidas}  onChange={this.atualizaStateCampo}/>
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