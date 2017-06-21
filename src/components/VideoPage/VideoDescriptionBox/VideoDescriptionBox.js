import React, { Component } from 'react';

import './VideoDescriptionBox.css';

class VideoDescriptionBox extends Component {

    render() {
        return (
            <div className='video_description_wrapper'>
                <div className='video_description_container'>
                    <h2>Video Description</h2>
                </div>
            </div>
        );
    }
}

export default VideoDescriptionBox;