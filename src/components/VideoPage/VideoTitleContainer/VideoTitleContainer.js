import React, { Component } from 'react';

import './VideoTitleContainer.css';

class VideoTitleContainer extends Component {

    render() {
        return (
            <div className='video_title_wrapper'>
                <div className='video_title_container'>
                    <h2>Video Title</h2>
                </div>
            </div>
        );
    }
}

export default VideoTitleContainer;