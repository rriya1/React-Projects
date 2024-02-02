// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import {
// 	Route,
// 	RouterProvider,
// 	createBrowserRouter,
// 	createRoutesFromElements,
// } from "react-router-dom";
// import Form from "./components/Form";
// import Learn from "./components/Learn";

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<App />}>
// 			<Route path="/components/Learn" element={<Learn />} />
// 			<Route path="/components/Form" element={<Form />} />
// 		</Route>
// 	)
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client"; //added client because suggested in console
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const router = (
	<Router>
		<App />
	</Router>
);
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode>{router}</React.StrictMode>);
