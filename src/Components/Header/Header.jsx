import logo from '../../Images/Logo.svg'; 
import LoginButton from '../Google-Login/login';
import { GoogleLogin } from 'react-google-login'

import React from 'react'

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Header.css';




function Header() {

  const history = useHistory();


    return (
      
        <div className="header">
        <img src={logo} class="logo-inicial" onClick={() => history.push('/')}/>
        <div class="header-content">
          <div class="header-links">
            <a onClick={() => history.push('/Cursos')}>Cursos</a>
            <a onClick={() => history.push('/Sobre')}>Sobre</a>
            <a onClick={() => history.push('/Contato')}>Contato</a>
          </div>
          <button type="button" class="login-button" onClick={() => history.push('/Login')}>Login</button>
        </div>
      </div>
       );
    }
    
 export default Header;