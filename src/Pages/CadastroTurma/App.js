import axios from "axios";
import React, { Component } from "react";
import { useHistory } from 'react-router-dom';

import Logo from "../../Images/Cadastro/Logo.png";

import './CadastroTurma.css'

import BackPage from '../../Images/Cadastro/back-page.svg';

export default class CadastroTurma extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            idTurma: 0,
            idCurso: '',
            nomeTurma: '',
        };
    };

    buscarTurma = () => {
        axios('https://fyiapi.azurewebsites.net/api/TurmasControllers')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ ListarTurma: resposta.data });
                    console.log(this.state.ListarTurma)
                }
            })
            .catch((erro) => console.log(erro));
    };

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
    };

    cadastrarTurma = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        let turma = {
            nomeTurma: this.state.nomeTurma,
            idCurso: this.state.idCurso,
        };
        axios
            .post('https://fyiapi.azurewebsites.net/api/TurmasControllers', turma, {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Turma cadastrado!');
                    this.setState({ isLoading: false });
                    // window.location.href = "/Admin";

                    // return(
                    //     <div>
                    //         <p>deu certo</p>
                    //     </div>
                    // )
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarTurma)
    }

    render() {
        return(
            <>
            <div className="cadastro-turma-main">
            <div className="cadastro-turma-title">
                    <h1>Cadastro de Turmas</h1>
                    <img src={BackPage} className="cadastro-turma-backpage-icon" onClick={() => useHistory.push('/Adm')}/>
                    <div className="cadastro-turma-container">
                        <div className="cadastro-turma-container-items">

                            <form className="cadastro-turma-form" onSubmit={this.cadastrarTurma} action="">

                                <img src={Logo} className="cadastro-curso-container-items-logo"/>

                                <div className="cadastro-box-inputs">
                                    <label for=""> </label> <input type="text" name="nomeTurma" placeholder=" Nome da Turma " value={this.state.nomeTurma} onChange={this.atualizaStateCampo}/>
                                </div>

                                <div className="cadastro-box-inputs">
                                    <label for=""> </label> <input type="text" name="idCurso" placeholder=" Id do Curso " value={this.state.idCurso} onChange={this.atualizaStateCampo}/>
                                </div>

                                <div>
                                    <button className="cadastro-turma-container-items-button" type="submit"> Cadastrar </button>
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