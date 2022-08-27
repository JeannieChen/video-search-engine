import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui negative message" >
            <div className="header">
                We're sorry we can't load videos for you at this time.
            </div>
            <p>{props.message}</p>
        </div>
    );
};

export default Spinner;