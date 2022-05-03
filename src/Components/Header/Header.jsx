import logo from '../../Images/Logo.svg'; 
import { GoogleLogin } from 'react-google-login';
import App from '../Google-Login/login';

import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Header.css';

function changeImg() {

  var button = document.getElementsByClassName="login-button"



  if (App.isLoggedIn = true) {
    button.style.display="none"
  }
}



function Header() {

  const history = useHistory();

  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);



    return (
      
      <div className="header">
        <img src={logo} class="logo-inicial" onClick={() => history.push('/')}/>
        <div class="header-content">
          <div class="header-links">
            <a onClick={() => history.push('/Cursos')}>Cursos</a>
            <a onClick={() => history.push('/Sobre')}>Sobre</a>
            <a onClick={() => history.push('/Contato')}>Contato</a>
          </div>
          { App.IsLoggedIn ? (
            <div>
              <img className="profile" src={profilePic} alt="Profile" />
            </div>
          ) : (
            ""
          )}
          <button type="button" className="login-button" onClick={() => history.push('/Login')}>Login</button>
        </div>
      </div>
       );
    }
    
 export default Header;