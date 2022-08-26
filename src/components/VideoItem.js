import './VideoItem.css';
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => onVideoSelect(video)}  // send back to App.js
            className="item video-item">
            <img
                className="ui image"
                alt={video.id.videoId}
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;