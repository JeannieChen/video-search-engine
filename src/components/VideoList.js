import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((v) => {
        return <VideoItem
            onVideoSelect={onVideoSelect}
            video={v} />;
    });

    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    );
};

export default VideoList;