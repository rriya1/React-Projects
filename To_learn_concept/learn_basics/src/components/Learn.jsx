import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ComponentThemeContext from "../context/ComponentThemeContext";

export default function Learn() {
	const { handleToggle } = useContext(ThemeContext);
	const { mode, buttonColor, buttonText } = useContext(ComponentThemeContext);

	return (
		<>
			<div
				style={{
					...mode,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			>
				<div className="container" style={mode}>
					<h1 className="my-4">Quick Start</h1>
					<h3 className="my-3">
						Welcome to the React documentation! This page will give you an
						introduction to the 80% of React concepts that you will use on a
						daily basis.
					</h3>
					<div
						className="p-3 border-primary-subtle rounded-3 my-6"
						style={{
							...mode,
							backgroundColor: mode.color === "white" ? "#343a46" : "#cfe2ff",
						}} //why isnt mode getting applied to this?
					>
						You will learn
						<br /> How to create and nest components
						<br /> How to add markup and styles <br />
						How to display data <br />
						How to render conditions and lists <br />
						How to respond to events and update the screen <br />
						How to share data between components
					</div>
				</div>
				<div className="container">
					<button
						className="btn btn-primary my-4"
						onClick={handleToggle}
						style={buttonColor}
					>
						{buttonText}
					</button>
				</div>
			</div>
		</>
	);
}
