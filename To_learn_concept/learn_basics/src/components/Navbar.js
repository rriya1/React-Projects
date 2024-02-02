import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const handleToggle = () => {};
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							alt=""
							src="../../public/react-logo.png"
							width="30"
							height="24"
							className="d-inline-block align-text-top"
						/>
						{props.title}
					</a>

					{/* <a className="navbar-brand" href="/">
						Learn
					</a> */}
					<Link to="/components/Learn" className="navbar-brand">
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
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/components/Form" className="nav-link">
									Reference
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Community
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Blog
								</a>
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
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}

//to check that the props of navbar are of these type only
Navbar.prototype = { title: PropTypes.string };
