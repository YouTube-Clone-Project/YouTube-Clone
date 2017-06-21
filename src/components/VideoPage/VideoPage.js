import React, { Component } from 'react';

import VideoTitleContainer from './VideoTitleContainer/VideoTitleContainer.js';
import VideoDescriptionBox from './VideoDescriptionBox/VideoDescriptionBox.js';
import CommentsContainer from './CommentsContainer/CommentsContainer.js';
import RecommendedVideosContainer from './RecommendedVideosContainer/RecommendedVideosContainer.js';

import './VideoPage.css';

class VideoPage extends Component {

    render() {
        return (
            <section className='videopage_main_container'>

                <section className='main_content_wrapper'>

                    <div className='iframe_placeholder'>
                        <iframe 
                        className='iframe'
                        src='http://www.youtube.com/embed/0tuK0sk_D1M'>
                        </iframe>
                    </div>

                    <VideoTitleContainer />

                    <VideoDescriptionBox />

                    <CommentsContainer />

                   

                </section>

                <section className='rightside_videos_wrapper'>        
                    <RecommendedVideosContainer />
                </section>        

            </section>
        );
    }
}

export default VideoPage;