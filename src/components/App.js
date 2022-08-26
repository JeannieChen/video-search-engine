import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: { q: term }
        });
        // console.log(response);

        this.setState({
            videos:
                response.data.items
        });
    };

    onVideoSelect = (video) => {
        // console.log('HAHA', video);
        this.setState({ selectedVideo: video })
    };


    render() {
        return (
            <div className="ui container" >
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
