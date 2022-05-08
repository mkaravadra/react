import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";

class App extends React.Component {
	state = { videos: [], selectedVideo: "" };

	onSearchSubmit = async (term) => {
		console.log(term);
		const result = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		console.log(result);
		this.setState({
			videos: result.data.items,
			selectedVideo: result.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}></VideoDetail>
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							></VideoList>
						</div>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.onSearchSubmit("building");
	}
}

export default App;
