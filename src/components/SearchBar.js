import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);  // pass states back to App.js
    }

    render() {
        return (
            <div className="ui search-bar">
                <form className="ui form"
                    onSubmit={this.onFormSubmit} >

                    <div className='inline field'>
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.onInputChange} // onChange; Update this.state.term
                        />
                        <button className="ui icon button">
                            <i className="search icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;