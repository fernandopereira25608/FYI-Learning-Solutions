import './login.css';
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

function Login() {

    return (

        <main>
            <section className='login-cor-fundo'>

                <div className='login-img-login'><img src={imgLogin} alt="img" /></div>

                <div className='login-box-fundo'>
                    <div className='login-espaco-entre'>
                        <img className='login-img-logo' src={Logo} alt="" />

                        <form>



                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="email" name=" emailJ " placeholder=" Email: " />
                            </div>

                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="password" name=" senhaJ " placeholder=" Senha: " />
                            </div>
                            {/* <div className='conteudo'> */}
                            <div class="login-text">
                                <h3>Esqueceu a senha?</h3>
                            </div>

                            <div>
                                <button className="login-btn-entrar"> Entrar </button>
                            </div>

                            <div className='login-conteudinho'>

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





