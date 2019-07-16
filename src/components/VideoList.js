// import './ImageList.css';
import React from 'react';
import VideoItem from './VideoItem';
// import ImageCard from './ImageCard';

const VideoList = ({ videos, onVideoSelect }) => {
	const videoItems = videos.map(video => (
		<VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
	));

	return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
