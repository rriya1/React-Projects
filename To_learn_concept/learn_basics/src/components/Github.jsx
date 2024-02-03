import React, { useContext, useEffect, useState } from "react";
import ComponentThemeContext from "../context/ComponentThemeContext";

function Github() {
	const { mode } = useContext(ComponentThemeContext);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://api.github.com/users/rriya1")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);
	return (
		<div syle={mode}>
			<h1 style={mode}>name: {data.login}</h1>
			<h3 style={mode}> followers: {data.followers}</h3>
			<img src={data.avatar_url}></img>
			<p style={mode}> repos: {data.public_repos}</p>
		</div>
	);
}

export default Github;
