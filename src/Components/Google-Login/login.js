import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [profilePic, setProfilePic] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const responseGoogle = (response) => {
		console.log(response);
		const {
			profileObj: { name, email, imageUrl },
		} = response;
		setName(name);
		setEmail(email);
		setProfilePic(imageUrl);
		setIsLoggedIn(true);
		window.location.href = "/"

	};
	
	return (
		<div className="container">
			<GoogleLogin
				clientId="668949015501-b432fsitmd7ifcsfviigf3mudblhr1on.apps.googleusercontent.com"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
			{isLoggedIn ? (
				<div style={{ textAlign: "center" }}>
					<h1>Sucesso - Bem Vindo {name}</h1>
				</div>
			) : (
				""
			)}
		</div>
	);

}



export default App;