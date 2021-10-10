import React, { useEffect, useState } from "react";
import Login from "./parts/Login";
import Player from "./parts/Player";
import { getTokenFromUrl } from "./spotify";

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		// set token to state
		if (_token) {
			setToken(_token);
		}
	}, []);

	return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
