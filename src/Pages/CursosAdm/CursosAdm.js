import axios from "axios";
import React, { Component } from 'react';


export default class CursosAdm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            Descricao: '',
            CargaHoraria: new Date(),
            VagasDisponiveis: '',
            VagasPrenchidas: '',
            IdCategoriums: 0,

            lstaCurso: [],
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
                    console.log(this.state.listaCtegoriums)
                }
            })
            .catch((erro) => console.log(erro));
    };
    buscarCursos = () => {
        axios('http://localhost:5000/api/CursosControllers')
            .then((resposta) => {
                if (resposta.status === 200) {
                    this.setState({ listaCursos: resposta.data });
                    console.log(this.state.listaCursos);
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
            CargaHoraria: this.state.CargaHoraria,
            VagasDisponiveis: this.state.VagasDisponiveis,
            VagasPrenchidas: this.state.VagasPrenchidas,
            IdCategoriums: this.state.idCategoriums,
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

            <div>

                <main>
                    <section>
                        <h2>Lista de cursos</h2>
                        <table style={{ borderCollapse: 'separate', borderSpacing: 30 }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cursos</th>
                                    <th>Descrição</th>
                                    <th>Carga Horaria</th>
                                    <th>Vagas disponiveis</th>
                                    <th>Vagas prenchidas</th>
                                    <th>Tipo de categoria</th>
                                </tr>
                            </thead>

                            {/* <tbody> */}
                                {this.state.listarCursos.map((Curso) => {
                                    return (
                                        <tr key={Curso.IdCurso}>
                                            <td>{Curso.IdCurso}</td>
                                            <td>{Curso.NomeCurso}</td>
                                            <td>{Curso.CargaHoraria}</td>
                                            <td>{Curso.Descriao}</td>
                                            <td>{Curso.VagasDisponiveis}</td>
                                            <td>{Curso.VagasPrenchidas}</td>
                                            <td>{Curso.IdCategoriaNavigation}</td>

                                        </tr>
                                    );
                                })}
                            {/* </tbody> */}

                        </table>
                    </section>

                    <section>
                        <h2>Cadastro de cursos</h2>
                        <form onSubmit={this.cadastrarCursos} action="">
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '20vw'
                                }}
                            >

                                <input
                                    required
                                    type="text"
                                    name="titulo"
                                    value={this.state.titulo}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Titulo do curso"
                                />

                                <input
                                    required
                                    type="text"
                                    name="Descricao"
                                    value={this.state.Descricao}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Descrição do curso"
                                />

                                <input
                                    type="date"
                                    name="CargaHoraria"
                                    value={this.state.CargaHoraria}
                                    onChange={this.atualizaStateCampo}
                                />

                                <input
                                    type="text"
                                    name="VagasDisponiveis"
                                    value={this.state.VagasDisponiveis}
                                    onChange={this.atualizaStateCampo}
                                />

                                <input
                                    type="text"
                                    name="Vagasprenchidas"
                                    value={this.state.VagasPrenchidas}
                                    onChange={this.atualizaStateCampo}
                                />

                                <select
                                    name="idCategoriums"
                                    value={this.state.IdCategoriums}
                                    onChange={this.atualizaStateCampo}
                                >

                                    <option value="0" selected disabled>
                                        Selecione o nome do curso
                                    </option>

                                    {this.state.listaCategoriums.map((Tema) => {
                                        return (
                                            <option key={Tema.idCategoriums} value={Tema.idCategoriums}>
                                                {Tema.tituloCategoriums}
                                            </option>
                                        );
                                    })}

                                </select>
                            </div>
                        </form>
                    </section>
                </main>


            </div>
        )
    }

}