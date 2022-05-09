import axios from "axios";
import React, { Component } from 'react';


export default class CursosAdm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            Descricao: '',
            VagasDisponiveis: '',
            VagasPreenchidas: '',
            CargaHoraria: new Date(),
            IdCategoriums: 0,

            listarCurso: [],
            isLoading: false,

        };
    };

    buscaCategoriums = () => {
        axios('http://localhost:5000/api/CategoriumsControllers', {
            headers: {
                Autorization: 'Bearer' + localStorage.getItem('usuario-login'),
            },
        })

            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ listaCategoriums: resposta.data });
                    console.log(this.state.listaCategoriums)
                }
            })
            .catch((erro) => console.log(erro));
    };
    buscarCursos = () => {
        axios('http://localhost:5000/api/CursosControllers')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({  listarCurso: resposta.data });
                    console.log(this.state. listarCurso);
                }
            })
            .catch((erro) => console.log(erro));
    };
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value });
    };
    componentDidMount() {
        console.log('inicia ciclo da vida');
        this.buscaCategoriums();
        console.log()
        this.buscarCursos();
    }
    cadastrarCursos = (event) => {
        event.preventDefault();
        this.setState({ isloading: true });

        let curso = {
            NomeCurso: this.state.titulo,
            Descricao: this.state.Descricao,
            VagasDisponiveis: this.state.VagasDisponiveis,
            VagasPrenchidas: this.state.VagasPreenchidas,
            CargaHoraria: this.state.CargaHoraria,
            IdCategoriums: this.state.IdCategoriums,
        };


        axios
            .post('http://localhost:5000/api/CursosControllers', curso, {
                haders: {
                    autorization: 'Bearer' + localStorage.getItem('usuario-login'),
                },
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Curso cadastrado!');
                    this.setState({ isLoading: false });
                }
            })
            .catch((erro) => {
                console.log(erro);
                this.setState({ isLoading: false });
            })
            .then(this.buscarCursos)

    };

    render() {
        return (
            <>
                <main>
                    <section>
                        {/* Lista de Cusos*/}
                        <h2>Lista de Cursos</h2>
                        <table style={{ borderCollapse: 'separate', borderSpacing: 30 }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Curso</th>
                                    <th>Descrição</th>
                                    <th>Vagas Disponiveis</th>
                                    <th>Vagas Preenchidas</th>
                                    <th>Carga Horaria</th>
                                    <th>Tipo de curso</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* Preenche o corpo da tabela utilizando a funcao map(). */}

                                {/* <tr><td>teste de linha</td></tr>  */}
                                {this.state. listarCurso.map((evento) => {
                                    return (
                                        <tr key={evento.idCurso}>
                                            <td>{evento.idCurso}</td>
                                            <td>{evento.nomeCurso}</td>
                                            <td>{evento.descricao}</td>
                                            <td>{evento.VagasDisponiveis}</td>
                                            <td>{evento.VagasPreenchidas}</td>
                                            <td>{evento.CargaHoraria}</td>
                                            {/* <td>{evento.IdCategoriaNavigation.titulo}</td> */}
                                        </tr>
                                    );  
                                })}
                            </tbody>
                        </table>
                    </section>
                </main>
            </>

        )
    }
}