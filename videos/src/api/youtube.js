import axios from "axios";

const KEY = "AIzaSyCxXmyymu65Kyk1el4VrXgsCKXDZQ3uWS0";

const KEY1 = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: "5",
		key: KEY1
	}
});
