import { GoogleLogin } from 'react-google-login'

const clientId = "668949015501-b432fsitmd7ifcsfviigf3mudblhr1on.apps.googleusercontent.com"


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

