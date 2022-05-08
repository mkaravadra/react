// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
	module.hot.accept();
}

// Create react component
/* const App = () => (
	<div>Hi there!</div>
); */

function getButtonText() {
	return "Click on me!";
}

const App = () => {
	//const buttonText = "Click Me!";
	const labelText = "Enter name:";
	const buttonText = { text: "Click Me" };
	const style = { backgroundColor: "blue", color: "white" };
	return (
		<div>
			<label className="label" htmlFor="name">
				{labelText}
				<input id="name" type="text" />
			</label>
			<button type="button" style={{ backgroundColor: "blue", color: "white" }}>
				{buttonText.text}
			</button>
			<button type="button" style={style}>
				{buttonText.text}
			</button>
		</div>
	);
};

// Take react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
