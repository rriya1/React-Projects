import React, { useState } from "react";
import ComponentThemeContext from "./ComponentThemeContext";
import { lightbutton, lightmode } from "../theme";

function ComponentThemeProvider({ children }) {
	const [mode, setMode] = useState(lightmode);
	const [buttonColor, setButtonColor] = useState(lightbutton);
	const [buttonText, setButtonText] = useState("Enable Dark mode");
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
				}}
			>
				{children}
			</ComponentThemeContext.Provider>
		</div>
	);
}

export default ComponentThemeProvider;
