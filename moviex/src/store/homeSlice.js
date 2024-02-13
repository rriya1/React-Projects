import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
	name: "home",
	initialState: {
		url: {}, //the urls for the movie images will get stored here
		genre: {}, //all information regarding the genre will be saved here
	},
	reducers: {
		getApiConfiguration: (state, action) => {
			state.url = action.payload; //changing the initial state
		},
		getGenre: (state, action) => {
			state.genre = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenre } = homeSlice.actions;

export default homeSlice.reducer;
