import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Footer from "./Footer";
import logo from '../img/heart.png';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('Goldendoodle');
    }

    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: { q: term }
        });
        // console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render() {
        return (
            <div className="ui container"
                style={{ marginTop: '20px', paddingBottom: '100px' }} >

                {/* Header */}
                <h2 className="ui header" style={{ paddingBottom: '5px' }}>
                    <img alt="logo" src={logo}
                        className="ui image" />
                    Jeanie Go!
                </h2>

                {/* Menu - search bar */}
                <div className="ui secondary  menu">
                    <a className="active item" href="#">Video</a>
                    <a className="item" href="#">Images</a>
                    <a className="item" href="https://jeanniechen.github.io/">About Jeanie</a>

                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <SearchBar onTermSubmit={this.onTermSubmit} />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
