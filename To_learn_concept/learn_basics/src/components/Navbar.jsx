import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import ComponentThemeContext from "../context/ComponentThemeContext";

export default function Navbar(props) {
	// const handleToggle = () => {};

	const { handleToggle } = useContext(ThemeContext);
	const { navbarColor, buttonColor, mode } = useContext(ComponentThemeContext);
	return (
		<>
			<div>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid" style={navbarColor}>
						<a className="navbar-brand" href="/" style={mode}>
							<img
								alt=""
								src="../../public/react-logo.png"
								width="30"
								height="24"
								className="d-inline-block align-text-top"
							/>
							{props.title}
						</a>

						<Link to="/components/Learn" className="navbar-brand" style={mode}>
							Learn
						</Link>

						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/components/Form" className="nav-link" style={mode}>
										Reference
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/" style={navbarColor}>
										Community
									</a>
								</li>
								<li className="nav-item">
									<Link
										to="/components/Github"
										className="nav-link"
										style={mode}
									>
										Profile
									</Link>
								</li>
							</ul>

							{/* toggle switch */}
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckChecked"
									onChange={handleToggle}
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckChecked"
									style={mode}
								>
									switch theme
								</label>
							</div>

							<form className="d-flex" role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
									style={{
										...mode,
										backgroundColor:
											mode.color === "white" ? "#343a46" : "#cfe2ff",
									}}
								/>
								<button
									className="btn btn-outline-success"
									type="submit"
									style={buttonColor}
								>
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

//to check that the props of navbar are of these type only
Navbar.propTypes = { title: PropTypes.string };
