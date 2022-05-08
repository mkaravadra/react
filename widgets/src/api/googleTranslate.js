import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const KEY1 = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";

export default axios.create({
	baseURL: "https://www.translation.googleapis.com/language/translate/v2",
	params: {
		key: KEY
	}
});
