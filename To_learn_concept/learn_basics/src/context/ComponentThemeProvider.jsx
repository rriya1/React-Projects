import React, { useState } from "react";
import ComponentThemeContext from "./ComponentThemeContext";
import { lightbutton, lightmode, lightnavbar, lightbg } from "../theme";

function ComponentThemeProvider({ children }) {
	const [mode, setMode] = useState(lightmode);
	const [buttonColor, setButtonColor] = useState(lightbutton);
	const [buttonText, setButtonText] = useState("Enable Dark mode");
	const [navbarColor, setNavbarColor] = useState(lightnavbar);
	const [overallBg, setOverallBg] = useState(lightbg);
	return (
		<div>
			<ComponentThemeContext.Provider
				value={{
					mode,
					setMode,
					buttonColor,
					setButtonColor,
					buttonText,
					setButtonText,
					navbarColor,
					setNavbarColor,
					overallBg,
					setOverallBg,
				}}
			>
				{children}
			</ComponentThemeContext.Provider>
		</div>
	);
}

export default ComponentThemeProvider;
