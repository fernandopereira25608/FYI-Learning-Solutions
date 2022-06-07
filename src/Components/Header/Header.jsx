import logo from '../../Images/Logo.svg'; 
import sair from "../../Images/icons/logout.svg";

import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Header.css';




class Header extends Component {

  // const history = useHistory();
  fazerLogout = () =>{
    localStorage.clear();
    // this.props.setUser(null);
  };

render(){
    return (
      
        <div className="header">
        <Link to={'/'}> <img src={logo} class="logo-inicial" /></Link>
        <div class="header-content">
          <div class="header-links">
           <Link to={'/Cursos'}><a>Cursos</a></Link> 
           <Link to={'/Sobre'}> <a>Sobre</a></Link>
           <Link to={'/Contato'}> <a>Contato</a></Link>
          </div>
          <Link to={'/Login'}><button type="button" class="login-button" >Login</button></Link>
          <img src={sair} class="sair" onClick={this.fazerLogout} alt="" />
        </div>
      </div>
       );
    }
  }
    
 export default Header;