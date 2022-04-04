import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicial from './Pages/Inicial/App';
import Admin from './Pages/Adm/App';
import reportWebVitals from './reportWebVitals';


import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Inicial} />
        <Route path="/admin" component={Admin} />
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
