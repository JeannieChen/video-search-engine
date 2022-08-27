import React from "react";
import Spinner from "./Spinner";

const VideoDetail = ({ video, message }) => {
    if (!video) {
        return <Spinner message={message} />;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe
                    title="video player"
                    src={videoSrc} />
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;