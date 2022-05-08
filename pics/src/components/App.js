import React from "react";

import ImageList from "./imageList";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term }
		});
		/* .then((response) => {
				console.log(response.data.results);
		}); */
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "20px" }}>
				<SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
				<ImageList images={this.state.images}></ImageList>
			</div>
		);
	}
}

export default App;
