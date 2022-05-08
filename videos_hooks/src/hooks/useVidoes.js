import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVidoes = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		console.log(term);
		const result = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		setVideos(result.data.items);
	};

	return [videos, search];
};

export default useVidoes;
