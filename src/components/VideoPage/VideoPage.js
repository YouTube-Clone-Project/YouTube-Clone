import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import VideoTitleContainer from './VideoTitleContainer/VideoTitleContainer.js';
import VideoDescriptionBox from './VideoDescriptionBox/VideoDescriptionBox.js';
import CommentsContainer from './CommentsContainer/CommentsContainer.js';

import './VideoPage.css';

class VideoPage extends Component {

    render() {
        return (
            <section className='videopage_main_container'>

                <section className='main_content_wrapper'>
                    
                    <div className='iframe_placeholder'>
                        <div className='iframe'></div>
                    </div>

                    <VideoTitleContainer />

                    <VideoDescriptionBox />

                    <CommentsContainer />

                </section>

                <div className='more_videos_wrapper'>        
                    <div className='more_videos_placeholder'></div>
                </div>        

            </section>
        );
    }
}

export default VideoPage;