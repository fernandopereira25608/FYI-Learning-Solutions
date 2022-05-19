import './AdminStyle.css';

import LogoSmall from '../../Images/FYILOGO.svg';
import Home from '../../Images/icons/house-user.png'
import Minus from '../../Images/icons/minus-solid.svg'
import Plus from '../../Images/icons/plus-solid.svg'
import Hat from '../../Images/icons/Hat.svg'
import Turmas from '../../Images/icons/Turmas.svg'
import Users from '../../Images/icons/Users.svg'

import React from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';



function HideContent() {

    var x = document.getElementById("right-box")

    if (x.style.display === "none") {
        x.style.transition = "2s";
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    };

    if (x.style.src == "Plus" ) {
        x.style.src = "Minus"
    } else {
        x.style.src = "Plus";
    };

}

function HideContent2() {

    var x = document.getElementById("right-box-2")

    if (x.style.display === "none") {
        x.style.transition = "2s";
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    };

    if (x.style.src == "Plus" ) {
        x.style.src = "Minus"
    } else {
        x.style.src = "Plus";
    };

}


function Admin() {

    const history = useHistory();

    return (

        <div>
            <main>
                <div class="left-box">
                    <div class="left-content">
                        <img src={LogoSmall} class="logo-small" />
                        <div class="home-link">
                           <img src={Home} class="home-icon" onClick={() => history.push('/')}/> 
                            <a><p>Home</p></a>
                        </div>
                    </div>
                    <hr />
                    <div class="open-content">
                            
                            <h5>Gerenciar</h5>
                            <img src={Plus} id="plus-icon" onClick={HideContent} />
                            
                        </div>
                    <hr />
                    <div class="open-content">
                            
                            <h5>Cadastro</h5>
                            <img src={Plus} id="plus-icon" onClick={HideContent2}/>
                            
                        </div>
                    <hr />
                </div>
                <div id="right-box">
                    <div class="right-container">
                        <div class="title-container">
                            <h1>Bem Vindo(a)</h1>
                            <p>Pagina de Gerenciamento</p>
                        </div>
                        <div class="navigation-container">
                            <div class="navigation-links">
                                <img src={Hat} class="hat-icon"  onClick={() => history.push('/CursosAdm')}/>
                                <h3 >Cursos</h3>
                            </div>
                            <div class="navigation-links">
                                <img src={Turmas} class="turmas-icon"  onClick={() => history.push('/TurmasAdm')}/>
                                <h3>Turmas</h3>
                            </div>
                            <div class="navigation-links">
                                <img src={Users} class="users-icon"  onClick={() => history.push('/UsuariosAdm')}/>
                                <h3>Usuarios</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="right-box-2">
                    <div class="right-container">
                        <div class="title-container">
                            <h1>Bem Vindo(a)</h1>
                            <p>Pagina de Cadastro</p>
                        </div>
                        <div class="navigation-container">
                            <div class="navigation-links">
                                <img src={Hat} class="hat-icon"  onClick={() => history.push('/CadastroCurso')}/>
                                <h3 >Cursos</h3>
                            </div>
                            <div class="navigation-links">
                                <img src={Turmas} class="turmas-icon"  onClick={() => history.push('/CadastroTurma')}/>
                                <h3>Turmas</h3>
                            </div>
                        </div>
                    </div>
                </div>

                
            </main>
        </div>
       
    )
}

export default Admin;