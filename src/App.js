import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);
	const [{ user }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		// set token to state
		if (_token) {
			setToken(_token);

			// giving access token to spotify service
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log("person", user);
			});

			dispatch({
				type: "SET_USER",
				user: user,
			});
		}
	}, []);

	return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
