import { useState, useEffect } from "react";
import { ReactReduxContext } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
	useEffect(() => {
		apiTesting();
	}, []);

	const dispatch = useDispatch(); //make an instance of the dispatcher
	const { url } = useSelector((state) => state.home); //calling useselector hook to get the value after destructuring

	const apiTesting = () => {
		fetchDataFromApi("/movie/popular").then((res) => {
			console.log(res);
			dispatch(getApiConfiguration(res)); //usinng the dispatcher to call the action
		});
	};
	return (
		<>
			<h1> my project start</h1>
			<p>{url?.total_pages}</p>
		</>
	);
}

export default App;
