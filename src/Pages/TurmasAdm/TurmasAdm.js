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
            if (resposta.status === 200) {
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
<<<<<<< HEAD
                                <tr className="Turmas-table-content">
                                    <th>id Turma</th>
                                    <th>id Curso</th>   
                                    <th>Turmas</th>
                                    <th>Inscrições</th>
                                    <th>Data inscrição</th>
=======
                                <tr>

                                    <div className="Table-list-content-idturma">
                                        <th>#</th>
                                    </div>

                                    <div className="Table-list-content-idcurso">
                                        <th>id Curso</th>
                                    </div>
                                    
                                    <div className="Table-list-content-turma">   
                                        <th>Turmas</th>
                                    </div>

>>>>>>> 0386c83f2b6f9b6e8282fef283dd44483e4a6f2a
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.ListarTurmas.map((evento)=>{
                                    return(
                                        <tr key={evento.idTurma} className="Table-list-content">

                                            <div className="Table-list-content-idturma">
                                                <td>{evento.idTurma}</td>
                                            </div>

                                            <div className="Table-list-content-idcurso">
                                                <td>{evento.idCurso}</td>
                                            </div>

                                            <div className="Table-list-content-turma">
                                                <td>{evento.nomeTurma}</td>
                                            </div>

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