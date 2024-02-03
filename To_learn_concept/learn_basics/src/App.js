// import Navbar from "./components/Navbar";
// import Form from "./components/Form";
// import Learn from "./components/Learn";
// import ThemeContextProvider from "./context/ThemeContextProvider";
// import ComponentThemeProvider from "./context/ComponentThemeProvider";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// function App() {
// 	return (
// 		<>
// 			<ComponentThemeProvider>
// 				<ThemeContextProvider>
// 					<Navbar title="React" id="myNavbar" />
// 					<Routes>
// 						<Route path="/components/Learn" element={<Learn />} />
// 						<Route path="/components/Form" element={<Form />} />
// 					</Routes>
// 				</ThemeContextProvider>
// 			</ComponentThemeProvider>
// 		</>
// 	);
// }

// export default App;
import ThemeContextProvider from "./context/ThemeContextProvider";
import ComponentThemeProvider from "./context/ComponentThemeProvider";
import Layout from "./components/Layout";
// import ComponentThemeContext from "./context/ComponentThemeContext";
// import { useContext } from "react";

function App() {
	return (
		<>
			<ComponentThemeProvider>
				<ThemeContextProvider>
					<Layout />
				</ThemeContextProvider>
			</ComponentThemeProvider>
		</>
	);
}

export default App;
