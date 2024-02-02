import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Learn from "./components/Learn";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Routes, Router } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar title="React" />
			<Form />
			<Learn />
		</>
	);
}

export default App;
