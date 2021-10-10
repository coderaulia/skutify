// setup state
export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// for development only (so you dont have to login repeatly)
	// token: "BQAJh-xDZwr0MEC1HSOt3W-wsBAl30vgMG4SlIuX9oKGd63842xAay79LkDd4cLUhl_llLnJFAFTcKYRnE0v1RkklUug0-mLo-I9Vz8JEw5vUWdvgGHjeyGMZTySMUtlKAfPYaV_jjcKUxkAC2ogRGCI3851EkPC1uXsw824Wg3gF1EiUTJt",
};

// reducer
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				// keep current state
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
