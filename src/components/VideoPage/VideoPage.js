import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoTitleContainer from './VideoTitleContainer/VideoTitleContainer.js';
import VideoDescriptionBox from './VideoDescriptionBox/VideoDescriptionBox.js';
import CommentsContainer from './CommentsContainer/CommentsContainer.js';
import RecommendedVideosContainer from './RecommendedVideosContainer/RecommendedVideosContainer.js';

import './VideoPage.css';

class VideoPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {}
    }

    render() {
        return (
            <section className='videopage_main_container'>

                <section className='main_content_wrapper'>

                    <div className='iframe_placeholder'>
                        <iframe 
                        className='iframe'
                        src={ 'http://www.youtube.com/embed/' + this.props.videoId }>
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

function mapStateToProps(state){
    return {
        videoId: state.videoId
    }
}

export default connect(mapStateToProps, {})(VideoPage);


// 'https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet'