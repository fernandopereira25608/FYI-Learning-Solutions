import axios from "axios";
import React, { Component } from "react";

export default class TurmasAdm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            nomeTurma: '',
            inscricaos: [],

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
                Autorization: 'Beaner' + localStorage.getItem('usuario-login'),
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
            </>
        )
    }
}