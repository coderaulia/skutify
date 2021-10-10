import React from "react";
import "./login.css";
import { loginUrl } from "../spotify";
import Fade from "react-reveal/Fade";

function Login() {
	return (
		<div className='login'>
			{/* Logo */}
			<Fade bottom delay={200}>
				<img src={(process.PUBLIC_URL, "Skutify.png")} alt='Skutify' />
			</Fade>
			{/* Login button */}
			<Fade bottom delay={350}>
				<a href={loginUrl}>Masuk dengan Spotify</a>
			</Fade>
		</div>
	);
}

export default Login;
