import React, { useEffect } from "react";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		// set token to state
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			// giving access token to spotify service
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => [
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				}),
			]);

			spotify.getMyTopArtists().then((response) =>
				dispatch({
					type: "SET_TOP_ARTISTS",
					top_artists: response,
				})
			);

			dispatch({
				type: "SET_SPOTIFY",
				spotify: spotify,
			});

			spotify.getPlaylist("37i9dQZEVXcOtIiENcYEp6").then((response) =>
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				})
			);
		}
	}, [token, dispatch]);

	return (
		<div className='app'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
