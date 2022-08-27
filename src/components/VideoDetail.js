import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="ui icon">
                <i className="notched circle loading icon"></i>
                <div className="content">
                    <h2 className="header"> Just one second..</h2>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
        );
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