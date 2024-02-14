import React from "react";
import "./style.scss";

function HeroBanner() {
	return (
		<div className="heroBanner">
			<div className="wrapper">
				<span className="title">Welcome</span>
				<span className="subtitle">Discover Movies and TV shows</span>
				<div className="searchInput">
					<input type="text" className="text" placeholder="Type to search" />
					<button className="search">Search</button>
				</div>
			</div>
		</div>
	);
}

export default HeroBanner;
