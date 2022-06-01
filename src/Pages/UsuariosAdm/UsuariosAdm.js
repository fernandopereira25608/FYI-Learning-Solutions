import axios from "axios";
import React, { Component } from "react";

import "./UsuariosAdm.css";

export default class UsuariosAdm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      empresa: [],
      email: "",
      inscricaos: [],

      idTipoUsuario: 0,
      idUsuario: 0,

      ListarUsuario: [],
      ListarTipoUsuario: {},
      isLoading: false,
    };
  }

  buscarTipoUsuario = () => {
    axios("https://fyiapi.azurewebsites.net/api/Usuario/Listar", {
      headers: {
        Autorization: "Bearer" + localStorage.getItem("usuario-login"),
      },
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          this.setState({ ListarTipoUsuario: resposta.data });
          console.log(this.state.ListarTipoUsuario);
        }
      })
      .catch((erro) => console.log(erro));
  };

  buscarUsuario = () => {
    axios("https://fyiapi.azurewebsites.net/api/Usuario/Listar")
      .then((resposta) => {
        if (resposta.status === 200) {
          this.setState({ ListarUsuario: resposta.data });
          console.log(this.state.ListarUsuario);
        }
      })
      .catch((erro) => console.log(erro));
  };
  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };
  componentDidMount() {
    console.log("inicia ciclo da vida");
    this.buscarTipoUsuario();
    console.log();
    this.buscarUsuario();
  }

  render() {
    return (
      <>
        <main className="fund">
          <div className="Usuarios-main">
            <div className="Usuarios-content">
              <h2>Lista de Usuários</h2>
              <div className="Usuarios-container">
              <table className="Usuarios-table">
                <thead className="Usuarios-table-container">
                  <tr className="Usuarios-table-content">
                    <th>#</th>
                    <th>Nome</th>
                    <th>Empresa</th>
                    <th>Email</th>
                    <th>Tipo Usuário</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.ListarUsuario.map((usuario) => {
                    return (
                      <tr key={usuario.idUsuario}>
                        <td>{usuario.idUsuario}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.empresa}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.idTipoUsuario}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table />
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
