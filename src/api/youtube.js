import axios from 'axios';
const KEY = 'AIzaSyA8d4Ws0o1PWCMof3b3acvVTFWLfqUXrcs';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
