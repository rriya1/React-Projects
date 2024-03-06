import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3"; //wouldve used this agar proxy ni use ki hooti toh
const BASE_URL = "/api";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; 

const headers = {
	accept: "application/json",
	Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, {
			headers,
			params,
		});
		return data;
	} catch (err) {
		console.log(err);
		return err;
	}
};
