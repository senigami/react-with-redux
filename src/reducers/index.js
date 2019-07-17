import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'song 1', duration: '2:01' },
		{ title: 'song 2', duration: '2:02' },
		{ title: 'song 3', duration: '2:03' },
		{ title: 'song 4', duration: '2:04' },
		{ title: 'song 5', duration: '2:05' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
