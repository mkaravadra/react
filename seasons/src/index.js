import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	/* constructor(props) {
		super(props);

		this.state = { lat: null, errorMessage: "" };
	} */

	state = { lat: null, errorMessage: "" };

	renderContent() {
		if (this.state.lat && !this.state.errorMessage) {
			return (
				<SeasonDisplay
					lat={this.state.lat}
					errorMessage={this.state.errorMessage}
				></SeasonDisplay>
			);
		} else if (!this.state.lat && this.state.errorMessage) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else {
			return <Spinner message="Please accept location request" />;
		}
	}

	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
				this.setState({ lat: position.coords.latitude });
			},
			(error) => {
				console.log(error);
				this.setState({ errorMessage: error.message });
			}
		);

		console.log("My component was rendered to the screen");
	}

	componentDidUpdate() {
		console.log("My component was just updated! It rerendered");
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
