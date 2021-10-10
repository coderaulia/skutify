import React from "react";
import "./login.css";

function Login() {
	return (
		<div className='login'>
			{/* Logo */}
			<img src={(process.PUBLIC_URL, "Skutify.png")} alt='Skutify' />
			{/* Login button */}
			<a>Masuk dengan Spotify</a>
		</div>
	);
}

export default Login;
