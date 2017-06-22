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
                    {/*<h2>{ JSON.stringify(snippet) }</h2>*/}
                    
                </div>
            </div>
        );
    }
}

export default VideoDescriptionBox;