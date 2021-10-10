import React from "react";
import "./login.css";
import { loginUrl } from "../spotify";

function Login() {
	return (
		<div className='login'>
			{/* Logo */}
			<img src={(process.PUBLIC_URL, "Skutify.png")} alt='Skutify' />
			{/* Login button */}
			<a href={loginUrl}>Masuk dengan Spotify</a>
		</div>
	);
}

export default Login;
