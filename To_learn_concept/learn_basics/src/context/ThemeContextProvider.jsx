import React, { useState } from "react";
import ThemeContext from "./themeContext";

function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		if (theme == "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div>
			<ThemeContext.Provider values={{ theme, toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
}

export default ThemeContextProvider;
