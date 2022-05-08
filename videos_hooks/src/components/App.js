import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import useVidoes from "../hooks/useVidoes";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVidoes("buildings");

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo}></VideoDetail>
					</div>
					<div className="five wide column">
						<VideoList
							videos={videos}
							onVideoSelect={setSelectedVideo}
						></VideoList>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
