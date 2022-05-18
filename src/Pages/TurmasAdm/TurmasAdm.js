import axios from "axios";
import React, { Component } from "react";

import "./TurmasStyle.css"

export default class TurmasAdm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            nomeTurma: '',
            inscricaos: [],
            dataInscricao:'',

            idTurma: 0,
            idCurso: 0,

            ListarTurmas: [],
            ListarInscricoes: {},
            isLoading: false,
        };
    };

    buscarTurmas = () => {
        axios('http://localhost:5000/api/TurmasControllers',{
            headers:{
                Autorization: 'Bearer' + localStorage.getItem('usuario-login'),
            },
        })

        .then((resposta) =>{
            if(resposta.status === 200){
                this.setState({ListarTurmas: resposta.data});
                console.log(this.state.ListarTurmas)
            }
        })
        .catch((erro) => console.log(erro));
    };
    buscarInscricoes = () =>{
        axios('http://localhost:5000/api/InscricoesControllers')
        .then((resposta) => {
            if (resposta.status ===200) {
                this.setState({ ListarInscricoes: resposta.data});
                console.log(this.state. ListarInscricoes);
            }
        })
        .catch((erro) => console.log(erro));
    };
    atualizaStateCampo = (campo) => {
        this.setState({[campo.target.name]: campo.target.value});
    };
    componentDidMount() {
        console.log('inicia ciclo da vida');
        this.buscarTurmas();
        console.log()
        this.buscarInscricoes();
    };

    render() {
        return(
            <>
            <div className="Turmas-main">
                <div className="Turmas-content">
                    <h1>Lista de Turmas</h1>
                    <div className="Turmas-container">
                        <table className="Turmas-table" style={{ borderCollapse: 'separate', borderSpacing: 30, width: '100%'}}>
                            <thead className="Turmas-table-container">
                                <tr>
                                    <th>#</th>
                                    <th>id Curso</th>   
                                    <th>Turmas</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.ListarTurmas.map((evento)=>{
                                    return(
                                        <tr key={evento.idTurma} className="Table-list-content">
                                            <td>{evento.idTurma}</td>
                                            <td className="Table-list-content-td">{evento.idCurso}</td>
                                            <td>{evento.nomeTurma}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                    </table>
                    </div>
                </div>
               
               
            </div>
            </>
        )
    }
}