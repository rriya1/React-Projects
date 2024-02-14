import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api"; //the api call function
const useFetch = (url) => {
	//states
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		//whenevr we call the API then the loading state is set, the other states previous data is emptied
		setLoading("loading...");
		setData(null);
		setError(null);

		//calling the API, we'll get this URL from the calling page itself
		fetchDataFromApi(url)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((err) => {
				setLoading(false);
				setError("Something went wrong!");
			});
	}, [url]); //added url in dependency list so that in any way if the url changes then the useEffect gets called

	return { data, loading, error };
};

export default useFetch;
