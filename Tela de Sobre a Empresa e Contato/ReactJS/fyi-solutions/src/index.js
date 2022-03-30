import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InfoEmpresa from './Component/InfoEmpresa/index';
import Contato from './Component/Contato/index';
import reportWebVitals from './reportWebVitals';


import {  Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={InfoEmpresa} />
        <Route path="/Contato" component={Contato} />
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
