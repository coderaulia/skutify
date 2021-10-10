// setup state
export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
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
		default:
			return state;
	}
};

export default reducer;
