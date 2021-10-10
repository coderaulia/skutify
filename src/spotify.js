export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://skutify.xenosweb.com";

// your client id from developer.spotify.com
const clientId = "a9b137a0783b4293914bf63f149920ee";

// what user can do with apps
const scopes = [
	"user-read-playback-position",
	"user-read-email",
	"user-library-modify",
	"playlist-modify-public",
	"ugc-image-upload",
	"user-follow-modify",
	"user-modify-playback-state",
	"user-read-recently-played",
	"user-read-private",
	"user-library-read",
	"user-top-read",
	"playlist-modify-private",
	"user-follow-read",
	"user-read-playback-state",
	"user-read-currently-playing",
	"playlist-read-private",
	"playlist-read-collaborative",
];

// extract the token from url
export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			// decode the access token
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

// full login url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
