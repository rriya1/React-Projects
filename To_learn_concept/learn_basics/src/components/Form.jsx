import React, { useContext, useState } from "react";
import ComponentThemeContext from "../context/ComponentThemeContext";

function Form(props) {
	//state variables
	const [text, setText] = useState("Enter text here");
	const [convertedText, setConvertedText] = useState("");

	const { mode, buttonColor } = useContext(ComponentThemeContext);

	const handleUpClick = () => {
		console.log("handle up clicked");
		setConvertedText(text.toUpperCase());
	};
	const handleCountClick = () => {
		setConvertedText(text.length.toString());
	};
	const handleClearClick = () => {
		setText("");
		setConvertedText("");
	};
	//to handle whenever the form is getting an input
	const handleOnChange = (event) => {
		console.log("handle on change was clicked");
		//setText("");
		// setText("typed something"); --> this shows that function is getting called everytime i type something in form, and the text inside form will get converted to this
		setText(event.target.value);
	};

	return (
		<>
			<div
				style={{
					...mode,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			>
				<div className="container" style={mode}>
					<h1>{props.displayText}</h1>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">
							Your thoughts about React
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="5"
							value={text}
							onChange={handleOnChange}
							style={{
								...mode,
								backgroundColor: mode.color === "white" ? "#343a46" : "#cfe2ff",
							}}
						></textarea>
					</div>

					<button
						className="btn btn-primary mx-2"
						onClick={handleUpClick}
						style={buttonColor}
					>
						Convert to uppercase
					</button>
					<button
						className="btn btn-primary mx-2"
						onClick={handleCountClick}
						style={buttonColor}
					>
						Count length
					</button>
					<button
						className="btn btn-primary mx-2"
						onClick={handleClearClick}
						style={buttonColor}
					>
						Clear text
					</button>
				</div>

				<div className="container my-3" style={mode}>
					<h2>Result</h2>
					<div
						className="card"
						style={{
							...mode,
							backgroundColor: mode.color === "white" ? "#343a46" : "#cfe2ff",
						}}
					>
						<div className="card-body">{convertedText}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
