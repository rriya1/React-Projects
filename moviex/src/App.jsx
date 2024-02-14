import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

//router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//redux
import { ReactReduxContext } from "react-redux";
import { useSelector, useDispatch } from "react-redux"; //for using the states via redux

//slices which will be used by redux
import { getApiConfiguration } from "./store/homeSlice";

//all the components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults/SearchResults";

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
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaType/:id" element={<Details />} />
				<Route path="/search/:query" element={<SearchResults />} />
				<Route path="/explore/:mediaType" element={<Explore />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
