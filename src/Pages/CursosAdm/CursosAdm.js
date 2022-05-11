import axios from "axios";
import React, { Component } from 'react';


export default class CursosAdm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            Descricao: '',
            vagasDisponiveis: '',
            vagasPreenchidas: '',
            cargaHoraria: new Date(),
            IdCategoria : 0,
            
            listarCurso: [],
            listaCategoriums: {},
            isLoading: false,
            Titulo:''
            

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
            vagasDisponiveis: this.state.vagasDisponiveis,
            vagasPrenchidas: this.state.vagasPreenchidas,
            cargaHoraria: this.state.cargaHoraria,
            idCategoria : this.state.idCategoria ,
            
            
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
                                            <td>{evento.vagasDisponiveis}</td>
                                            <td>{evento.vagasPreenchidas}</td>
                                            <td>{evento.cargaHoraria}</td>
                                            <td>{evento.idCategoria}</td>
                                            {/* <td>{evento.IdCategoriaNavigation.Titulo}</td> */}
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