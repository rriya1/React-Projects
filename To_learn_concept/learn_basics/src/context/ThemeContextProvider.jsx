import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import {
	lightbutton,
	lightmode,
	darkbutton,
	darkmode,
	darknavbar,
	lightnavbar,
	darkbg,
	lightbg,
} from "../theme";
import ComponentThemeContext from "./ComponentThemeContext";

function ThemeContextProvider({ children }) {
	const {
		setMode,
		setButtonColor,
		setButtonText,
		setNavbarColor,
		setOverallBg,
	} = useContext(ComponentThemeContext);
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
		// console.log("functionc called and value is - " + theme); asynchronous behaviour so gives incorrect value
	};

	const handleToggle = () => {
		if (theme === "light") {
			toggleTheme(); //if theme is light currently then make it dark
			setMode(darkmode);
			setButtonText("Enable Light Mode");
			setButtonColor(darkbutton);
			setNavbarColor(darknavbar);
			setOverallBg(darkbg);
		} else {
			toggleTheme();
			setMode(lightmode);
			setButtonText("Enable Dark Mode");
			setButtonColor(lightbutton);
			setNavbarColor(lightnavbar);
			setOverallBg(lightbg);
		}
	};

	useEffect(() => {
		//to check if theme is getting changed after each render
		console.log("Theme updated to:", theme);
	}, [theme]);

	return (
		<div>
			<ThemeContext.Provider value={{ theme, toggleTheme, handleToggle }}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
}

export default ThemeContextProvider;
