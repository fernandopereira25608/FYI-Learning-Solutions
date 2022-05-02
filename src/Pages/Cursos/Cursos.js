import './Cursos.css'
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

import React from 'react';
import ReactDOM from 'react-dom';



    function Cursos() {

    // let subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    // setIsOpen(true);
    // }

    // function afterOpenModal() {
    // // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    // }

    // function closeModal() {
    // setIsOpen(false);
    // }

    return (
        <div>

            <Header />

            <main>
                <div className='cursos-box-conteudo'>
                    <h1>Categorias:</h1>
                    <div className='cursos-box-conteudo-card '>
                        <div className="cursos-Content-info-card"></div>
                        <div className='cursos-conteudo-card'>
                            <div id="cursos-curso-card">
                                <h3>microsoft</h3>
                            </div>

                            <div id="cursos-curso-card">
                                <h3>back-end</h3>
                            </div>
                        </div>

                        <div className='cursos-conteudo-card'>

                            <div id="cursos-curso-card">
                                <h3>banco de dados</h3>
                            </div>

                            <div id="cursos-curso-card">
                                <h3>front-end</h3>
                            </div>
                        </div>

                        <div className="cursos-Content-info-card2"></div>

                    </div>

                </div>
            </main >

            <Footer />

        </div >
    );

}



export default Cursos;
