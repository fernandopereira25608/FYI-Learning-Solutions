import axios from "axios";
import { Component } from "react";

export default class UsuariosAdm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome:'',
            empresa:[],
            email:'',
            inscricaos:[],

            idTipoUsuario: 0,
            idUsuario: 0,

            ListarUsuario: [],
            ListarTipoUsuario: {},
            isLoading: false,
        };
    };

    buscarTipoUsuario = () => {
        axios('http://localhost:5000/api/TipoUsuariosControllers',{
            headers: {
                Autorization: 'Bearer' + localStorage.getItem('usuario-login'),
            },
        })
        .then((resposta) =>{
            if (resposta.status === 200) {
                this.setState({ ListarTipoUsuario: resposta.data });
                console.log(this.state.ListarTipoUsuario)
            }
        })
        .catch((erro) => console.log(erro));
    };

    buscarUsuario = () => {
        axios('http://localhost:5000/api/UsuariosControllers')
        .then((resposta) => {
            if (resposta.status === 200) {
                this.setState({ListarUsuario: resposta.data});
                console.log(this.state.ListarUsuario)
            }
        })
        .catch((erro) => console.log(erro));
    };
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value });
    };
    componentDidMount() {
        console.log('inicia ciclo da vida');
        this.buscarTipoUsuario();
        console.log()
        this.buscarUsuario();
    }
}