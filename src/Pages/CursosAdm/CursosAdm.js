import axios from "axios";
import React, { Component } from "react";

import "./CursosAdm.css";

export default class CursosAdm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "",
      Descricao: "",
      vagasDisponiveis: "",
      vagasPreenchidas: "",
      cargaHoraria: new Date(),
      IdCategoria: 0,

      listarCurso: [],
      listaCategoriums: {},
      isLoading: false,
      Titulo: "",
    };
  }

  buscaCategoriums = () => {
    axios("http://localhost:5000/api/CategoriumsControllers", {
      headers: {
        Autorization: "Bearer" + localStorage.getItem("usuario-login"),
      },
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          this.setState({ listaCategoriums: resposta.data });
          console.log(this.state.listaCategoriums);
        }
      })
      .catch((erro) => console.log(erro));
  };
  buscarCursos = () => {
    axios("http://localhost:5000/api/CursosControllers")
      .then((resposta) => {
        if (resposta.status === 200) {
          this.setState({ listarCurso: resposta.data });
          console.log(this.state.listarCurso);
        }
      })
      .catch((erro) => console.log(erro));
  };
  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };
  componentDidMount() {
    console.log("inicia ciclo da vida");
    this.buscaCategoriums();
    console.log();
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
      idCategoria: this.state.idCategoria,
    };

    axios
      .post("http://localhost:5000/api/CursosControllers", curso, {
        haders: {
          autorization: "Bearer" + localStorage.getItem("usuario-login"),
        },
      })
      .then((resposta) => {
        if (resposta.status === 201) {
          console.log("Curso cadastrado!");
          this.setState({ isLoading: false });
        }
      })
      .catch((erro) => {
        console.log(erro);
        this.setState({ isLoading: false });
      })
      .then(this.buscarCursos);
  };

  render() {
    return (
      <>
        <main>
          <div className="Cursos-main">
            <div className="Cursos-content">
              <h2>Lista de Cursos</h2>
              <div className="Cursos-container">
                <table className="Cursos-table">
                  <thead className="Cursos-table-container">
                    <tr className="Cursos-table-content">
                      <th>#</th>
                      <th>Curso</th>
                      <th>Vagas Disponíveis</th>
                      {/* <th>Vagas Preenchidas</th> */}
                      <th>Carga Horária</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.listarCurso.map((evento) => {
                      return (
                        <tr key={evento.idCurso}>
                          <td>{evento.idCurso}</td>
                          <td>{evento.nomeCurso}</td>
                          <td>{evento.vagasDisponiveis}</td>
                          {/* <td>{evento.vagasPreenchidas}</td> */}
                          <td>{evento.cargaHoraria}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
