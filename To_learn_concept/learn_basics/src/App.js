import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Learn from "./components/Learn";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ComponentThemeProvider from "./context/ComponentThemeProvider";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Routes, Router } from "react-router-dom";

function App() {
	return (
		<>
			<ComponentThemeProvider>
				<ThemeContextProvider>
					<Navbar title="React" />
					<Form />
					<Learn />
				</ThemeContextProvider>
			</ComponentThemeProvider>
		</>
	);
}

export default App;
