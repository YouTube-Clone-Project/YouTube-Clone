import React, { Component } from 'react';

import './VideoTitleContainer.css';

class VideoTitleContainer extends Component {


    render() {
        let {
            snippet,
            statistics,
            id
        }=this.props
        return (
            <div className='video_title_wrapper'>
                <div className='video_title_container'>
                    <h2>{ JSON.stringify( statistics.viewCount ) }</h2>
                    {/*<h3>Video Title</h3>*/}
                </div>
            </div>
        );
    }
}

export default VideoTitleContainer;