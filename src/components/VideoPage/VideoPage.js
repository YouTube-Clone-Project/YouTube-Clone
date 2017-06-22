import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import VideoTitleContainer from './VideoTitleContainer/VideoTitleContainer.js';
import VideoDescriptionBox from './VideoDescriptionBox/VideoDescriptionBox.js';
import CommentsContainer from './CommentsContainer/CommentsContainer.js';
import RecommendedVideosContainer from './RecommendedVideosContainer/RecommendedVideosContainer.js';

import './VideoPage.css';

class VideoPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            videoInfo: {},
            recommendedVideos: []
        }
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet,statistics`)
        .then( videoInfo => {
            axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=US&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet`)
            .then( recommendedVideos => {
                this.setState({
                    videoInfo: videoInfo.data.items[0],
                    recommendedVideos: recommendedVideos.data.items
                })
                console.log(this.state);
            });
        })
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
                    
                    <VideoTitleContainer 
                    snippet={ this.state.videoInfo.snippet || {} }
                    videoId={ this.state.videoInfo.id }
                    statistics={ this.state.videoInfo.statistics || {} } />
                    
                    <VideoDescriptionBox 
                    snippet={ this.state.videoInfo.snippet || {} } />

                    <CommentsContainer />
        
                </section>

                <section className='rightside_videos_wrapper'>        
                    <RecommendedVideosContainer
                    videos={ this.state.recommendedVideos || [] } />
                </section>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        videoId: ownProps.match.params.videoId,
    }
}

export default connect(mapStateToProps, {  } )(VideoPage);


// 'https://www.googleapis.com/youtube/v3/videos?id=i9MHigUZKEM&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet'
