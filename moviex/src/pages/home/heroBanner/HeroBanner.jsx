import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/UseFetch";

function HeroBanner() {
	const [background, setBackground] = useState("");
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const { data, loading } = useFetch("/movie/upcoming");

	const searchQueryHandler = (e) => {
		if (e.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<div className="heroBanner">
			<div className="wrapper">
				<span className="title">Welcome</span>
				<span className="subtitle">Discover Movies and TV shows</span>
				<div className="searchInput">
					<input
						type="text"
						className="text"
						placeholder="Type to search"
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						onKeyUp={searchQueryHandler}
					/>
					<button className="search">Search</button>
				</div>
			</div>
		</div>
	);
}

export default HeroBanner;
