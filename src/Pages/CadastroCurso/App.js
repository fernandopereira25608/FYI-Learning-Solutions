import axios from "axios";
import React, { Component } from "react";

import './CadastroCurso.css'

export default class CadastroCurso extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <>
            <div className="cadastro-curso-main">
                <div className="cadastro-curso-title">
                    <h1>Cadastro de Cursos</h1>
                    <div className="cadastro-curso-container">
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}