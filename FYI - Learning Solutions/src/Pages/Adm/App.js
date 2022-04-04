import './AdminStyle.css';

import LogoSmall from '../../Images/FYILOGO.svg';
import Home from '../../Images/icons/house-user.png'
import Minus from '../../Images/icons/minus-solid.svg'
import Plus from '../../Images/icons/plus-solid.svg'
import Hat from '../../Images/icons/Hat.svg'
import Turmas from '../../Images/icons/Turmas.svg'
import Users from '../../Images/icons/Users.svg'

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function HideContent() {

    var x = document.getElementById("right-box")

    if (x.style.display === "none") {
        x.style.transition = "2s"
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

}

// function SwitchIcons() {
    
//     if (document.getElementById("minus-icon").src == {Minus}) {
//         document.getElementById("plus-icon").src == {Plus}
//     } else {
//         document.getElementById("minus-icon").src == {Minus}
//     }
// }

function Admin() {
    return (

        <div>
            <main>
                <div class="left-box">
                    <div class="left-content">
                        <img src={LogoSmall} class="logo-small" />
                        <div class="home-link">
                           <img src={Home} class="home-icon"/> 
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
                            
                            <h5>Logs</h5>
                            <img src={Plus} id="plus-icon"/>
                            
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
                                <img src={Hat} class="hat-icon"/>
                                <h3>Cursos</h3>
                            </div>
                            <div class="navigation-links">
                                <img src={Turmas} class="turmas-icon"/>
                                <h3>Turmas</h3>
                            </div>
                            <div class="navigation-links">
                                <img src={Users} class="users-icon"/>
                                <h3>Usuarios</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
       
    )
}

export default Admin;