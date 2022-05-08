import React from "react";

class SearchBar extends React.Component {
	// 1st way
	/* constructor(props) {
		super(props);
		this.state = { term: "" }
		this.onFromSubmit = this.onFromSubmit.bind(this);
	} */

	state = { term: "" };

	onInputChange(event) {
		this.setState({ search: event.target.value });
	}

	//2nd way
	onFromSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	//3rd way
	/* onFromSubmit(event) {
		event.preventDefault();
		console.log(this.state.term);
	}; */

	/* onInputClick(event) {
		console.log("Input was clicked");
	} */

	render() {
		return (
			<div className="ui segment">
				{/* 2nd way */}
				<form className="ui form" onSubmit={this.onFromSubmit}>
					{/* 3rd way */}
					{/* <form className="ui form" onSubmit={(event) => this.onFromSubmit(event)}></form>*/}
					<div className="field">
						<label>Search text</label>
						<input
							type="text"
							value={this.state.term}
							//onChange={this.onInputChange}
							onChange={(e) => this.setState({ term: e.target.value })}
							//onClick={this.onInputClick}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
