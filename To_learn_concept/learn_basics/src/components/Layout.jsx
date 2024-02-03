import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";
import Learn from "./Learn";
import ComponentThemeContext from "../context/ComponentThemeContext";
import Github from "./Github";

function Layout() {
	const { overallBg } = useContext(ComponentThemeContext);
	return (
		<>
			<div style={overallBg}>
				<Navbar title="React" id="myNavbar" />
				<Routes>
					<Route path="/components/Learn" element={<Learn />} />
					<Route path="/components/Form" element={<Form />} />
					<Route path="/components/Github" element={<Github />} />
				</Routes>
			</div>
		</>
	);
}

export default Layout;
