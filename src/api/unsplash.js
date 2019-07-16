import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 5376f2eee9c80e07c4cb22d9cb4cb802d05dce2efa9d00819875d9dadfb478ac',
	},
});
