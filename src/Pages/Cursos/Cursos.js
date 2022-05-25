import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import React from 'react';
import ReactDOM from 'react-dom';

import './Cursos.css'


    function Cursos() {

        document.title = 'FYI - Cursos'


    return (
        <div>

            <Header />

            <main>
                <div className='cursos-box-conteudo'>
                    <h1>Categorias:</h1>
                    <div className='cursos-box-conteudo-card '>
                        <div class="cursos-Content-info-card"></div>
                        <div className='cursos-conteudo-card'>
                            <div class="cursos-curso-card">
                                <h3>microsoft</h3>
                            </div>

                            <div class="cursos-curso-card">
                                <h3>back-end</h3>
                            </div>
                        </div>

                        <div className='cursos-conteudo-card'>

                            <div class="cursos-curso-card">
                                <h3>banco de dados</h3>
                            </div>

                            <div class="cursos-curso-card">
                                <h3>front-end</h3>
                            </div>
                        </div>

                        <div class="cursos-Content-info-card2"></div>

                    </div>

                </div>
            </main >

            <Footer />

        </div >
    )

}

export default Cursos;
