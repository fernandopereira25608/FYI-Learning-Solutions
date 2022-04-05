import './Cadastro.css';
import Logo from "../../Images/Cadastro/Logo.png"
import Photo from "../../Images/Cadastro/Photo.png"




function Cadastro() {

    return (

        <main>
            <section className='cor-fundo'>
                <div className='box-fundo'>
                    <div className='espaco-entre'>
                        <img className='img-logo' src={Logo} alt="" />

                        <form action="">

                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="name" name=" nameJ " placeholder=" Nome: " />
                            </div>

                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="text" name=" textJ " placeholder=" Empresa(opicional): " />
                            </div>

                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="email" name=" emailJ " placeholder=" Email: " />
                            </div>

                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="password" name=" senhaJ " placeholder=" Senha: " />
                            </div>
                            {/* <div className='conteudo'> */}

                            <div>
                                <button className="btn-cadastrar"> Cadastrar </button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className='text'>
                    <img className='box-photo' src={Photo} alt="img" />
                </div>
            </section>
        </main>
    )

}

export default Cadastro;