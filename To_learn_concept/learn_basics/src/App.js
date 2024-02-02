import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Learn from "./components/Learn";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ComponentThemeProvider from "./context/ComponentThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<ComponentThemeProvider>
				<ThemeContextProvider>
					<Navbar title="React" />
					<Routes>
						<Route path="/components/Learn" element={<Learn />} />
						<Route path="/components/Form" element={<Form />} />
					</Routes>
				</ThemeContextProvider>
			</ComponentThemeProvider>
		</>
	);
}

export default App;
