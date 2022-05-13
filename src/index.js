import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicial from './Pages/Inicial/App';
import Cursos from './Pages/Cursos/Cursos';
import Admin from './Pages/Adm/App';
import Login from './Pages/Login/login';
import Cadastro from './Pages/Cadastro/Cadastro';
import InfoEmpresa from './Pages/InfoEmpresa';
import Contato from './Pages/Contato';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './Pages/404/App';
import CursosAdm from './Pages/CursosAdm/CursosAdm';
import TurmasAdm from './Pages/TurmasAdm/TurmasAdm'
import UsuariosAdm from './Pages/UsuariosAdm/UsuariosAdm';


import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Inicial} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Login" component={Login} />
        <Route path="/Sobre" component={InfoEmpresa} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Cursos" component={Cursos} />
        <Route path="/CursosAdm" component={CursosAdm} />
        <Route path="/TurmasAdm" component={TurmasAdm} />
        <Route path="/UsuariosAdm" component={UsuariosAdm} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
