import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Footer from "./Footer";
import Spinner from "./Spinner";
import logo from '../img/heart.png';

class App extends React.Component {
    state = {
        videos: [], selectedVideo: null,
        errorMessage: null
    };

    componentDidMount() {
        this.onTermSubmit('The Dodo');
    }

    // Call API & catch error
    onTermSubmit = async (term) => {
        try {
            const response = await Youtube.get('/search', {
                params: { q: term }
            })
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        } catch (e) {
            if (e.response && e.response.data) {
                this.setState({ errorMessage: e.response.data.error.message })
            }
        }
    };

    // Set default selected video 
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    // If catched error: show msg/spinner, o.w. display selected video
    renderContent() {
        if (this.state.errorMessage) {
            return <Spinner message={this.state.errorMessage} />;
        }
        return (
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
        );
    }

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
                    <a className="item disabled" href="#">Images</a>
                    <a className="item" href="https://jeanniechen.github.io/">About Jeanie</a>

                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <SearchBar onTermSubmit={this.onTermSubmit} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video */}
                <div className='content'> {this.renderContent()} </div>

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
