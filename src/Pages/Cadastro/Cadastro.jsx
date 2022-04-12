import './Cadastro.css';
import Logo from "../../Images/Cadastro/Logo.png"
import Photo from "../../Images/Cadastro/Photo.png"




function Cadastro() {

    return (

        <main>
            <section className='cadastro-cor-fundo'>
                <div className='cadastro-box-fundo'>
                    <div className='cadastro-espaco-entre'>
                        <img className='cadastro-img-logo' src={Logo} alt="" />

                        <form action="">

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="name" name=" nameJ " placeholder=" Nome: " />
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="text" name=" textJ " placeholder=" Empresa(opicional): " />
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="email" name=" emailJ " placeholder=" Email: " />
                            </div>

                            <div className="cadastro-box-inputs">
                                <label for=""> </label> <input type="password" name=" senhaJ " placeholder=" Senha: " />
                            </div>
                            {/* <div className='conteudo'> */}

                            <div>
                                <button className="cadastro-btn-cadastrar"> Cadastrar </button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className='cadastro-text'>
                    <img className='cadastro-box-photo' src={Photo} alt="img" />
                </div>
            </section>
        </main>
    )

}

export default Cadastro;