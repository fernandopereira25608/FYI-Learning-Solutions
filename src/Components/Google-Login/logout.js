import { GoogleLogout } from 'react-google-login'

import React from 'react'

const clientId = "423253214186-v4d5ks7hd8lnltjbjkookrgt28c66dcj.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Logout successfull!")
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout