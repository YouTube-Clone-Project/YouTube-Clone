import React, { Component } from 'react';

import './VideoDescriptionBox.css';

class VideoDescriptionBox extends Component {

    render() {
        let {
            snippet
        }=this.props
        return (
            <div className='video_description_wrapper'>
                <div className='video_description_container'>
                    <p id='publish_date'>Published on { snippet.publishedAt }</p>
                    <p id='video_description'>{ snippet.description }</p>
                    <div className='show_more_box'>
                        <div className='line'></div>
                        <p id='show_more_words'>SHOW MORE</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDescriptionBox;