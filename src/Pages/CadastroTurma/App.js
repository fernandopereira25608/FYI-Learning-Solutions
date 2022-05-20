import axios from "axios";
import React, { Component } from "react";

import Logo from "../../Images/Cadastro/Logo.png";

import './CadastroTurma.css'

export default class CadastroTurma extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <>
            <div className="cadastro-turma-main">
            <div className="cadastro-turma-title">
                    <h1>Cadastro de Turmas</h1>
                    <div className="cadastro-turma-container">
                        <div className="cadastro-turma-container-items">

                            <img src={Logo} className="cadastro-curso-container-items-logo"/>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name=" textJ " placeholder=" Curso da Turma " />
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name=" textJ " placeholder=" idCurso " />
                            </div>

                            <div>
                                <button className="cadastro-turma-container-items-button"> Cadastrar </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}