import './login.css';
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

function Login() {

    return (

        <main>
            <section className='cor-fundo'>

                <div className='img-login'><img src={imgLogin} alt="img" /></div>

                <div className='box-fundo'>
                    <div className='espaco-entre'>
                        <img className='img-logo' src={Logo} alt="" />

                        <form action="">



                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="email" name=" emailJ " placeholder=" Email: " />
                            </div>

                            <div className=" box-inputs ">
                                <label for=""> </label> <input type="password" name=" senhaJ " placeholder=" Senha: " />
                            </div>
                            {/* <div className='conteudo'> */}
                            <div>
                                <h3>Esqueceu a senha?</h3>
                            </div>

                            <div>
                                <button className="btn-entrar"> Entrar </button>
                            </div>

                            <div className='conteudinho'>

                                <p>ou</p>

                                <h3>Cadastre-se agora</h3>

                            </div>
                        </form>
                    </div>

                </div>


            </section>
        </main>
    )

}

export default Login;





