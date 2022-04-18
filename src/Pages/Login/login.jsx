import './login.css';
import imgLogin from "../../Images/Login/imgLogin.png"
import Logo from "../../Images/Login/Logo.png"

import { useHistory } from 'react-router-dom';

function Login() {
    
    const history = useHistory();

    return (

        <main>
            <section className='login-cor-fundo'>

                <div className='login-img-login' ><img src={imgLogin} alt="img" /></div>

                <div className='login-box-fundo'>
                    <div className='login-espaco-entre'>
                        <img className='login-img-logo' src={Logo} alt="" onClick={() => history.push('/')}/>

                        <form className='form-box'>



                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="email" name=" email " placeholder=" Email: " />
                            </div>

                            <div className="login-box-inputs">
                                <label for=""> </label> <input type="password" name=" senha " placeholder=" Senha: " />
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

                                {/* <h3 onClick={() => history.push('/Cadastro')}>Cadastre-se agora</h3> */}
                                <a onClick={() => history.push('/Cadastro')}>Cadastre-se agora</a>
                                

                            </div>
                        </form>
                    </div>

                </div>


            </section>
        </main>
    )

}

export default Login;





