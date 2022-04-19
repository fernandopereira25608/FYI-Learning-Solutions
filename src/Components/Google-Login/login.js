import { GoogleLogin } from 'react-google-login'

const clientId = "423253214186-v4d5ks7hd8lnltjbjkookrgt28c66dcj.apps.googleusercontent.com"

function LoginButton() {

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res)
    }
     
    

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId= {clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                usuariocheck={true}
            />
        </div>
    )
}
export default LoginButton