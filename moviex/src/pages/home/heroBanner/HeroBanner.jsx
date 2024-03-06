import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Img from "../../../components/lazyLoadeImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
	const [background, setBackground] = useState(""); //to store background images
	const [query, setQuery] = useState(""); //setting the query the user will input in search box

	const navigate = useNavigate(); //for navigation
	const { url } = useSelector((state) => state.home); //getting url from the home slice redux

	const { data, loading } = useFetch("/movie/upcoming"); //data coming

	useEffect(() => {
		const bg =
			url.backdrop +
			data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg); //the full url of the image gets constructed with the redux home slice and upcoming movies data
	}, [data]); //whenever data changes or page reloads then the banner image will change

	const searchQueryHandler = (e) => {
		//when user presses enter then we will navigate to search page for the query.
		if (e.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<div className="heroBanner">
			{
				//if the loading state is false then load the image
			}
			<div className="backdrop-img">{!loading && <Img src={background} />}</div>

			<ContentWrapper>
				<span className="title">Welcome</span>
				<span className="subtitle">Discover Movies and TV shows</span>
				<div className="searchInput">
					<input
						type="text"
						className="text"
						placeholder="Type to search"
						onChange={(e) => {
							setQuery(e.target.value); //keepchanigng the query as it changes
						}}
						onKeyUp={searchQueryHandler} //what to do when user presses enter
					/>
					<button className="search">Search</button>
				</div>
			</ContentWrapper>
		</div>
	);
}

export default HeroBanner;
