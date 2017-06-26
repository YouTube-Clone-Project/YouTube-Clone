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
            videoList: [],
            videoId: props.videoId,
            uniqueId: Math.floor(Math.random()*999)
        }

        this.handleDislike = this.handleDislike.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet,statistics`)
        .then( videoInfo => {
            videoInfo = videoInfo.data.items[0];
            let searchTerm = videoInfo.snippet.tags[0] + '+' + videoInfo.snippet.tags[1] + '+' + videoInfo.snippet.tags[2];
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ searchTerm }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`)
            .then( RecommendedVideos => {
                this.setState({
                    videoInfo: videoInfo,
                    videoList: RecommendedVideos.data.items
                })
            })
        })
    }

    handleLike(){
        this.setState({
            videoInfo: Object.assign({}, this.state.videoInfo, {
                statistics: Object.assign({}, this.state.videoInfo.statistics, {
                    likeCount: Number(this.state.videoInfo.statistics.likeCount) + 1
                })
            })
        })
    }

    handleDislike(){
        this.setState({
            videoInfo: Object.assign({}, this.state.videoInfo, {
                statistics: Object.assign({}, this.state.videoInfo.statistics, {
                    dislikeCount: Number(this.state.videoInfo.statistics.dislikeCount) + 1
                })
            })
        })
    }

    render() {
        return (
            <section className='videopage_main_container'>

                <section className='main_content_wrapper'>

                    <div className='iframe_placeholder'>
                        <iframe 
                        className='iframe'
                        allowFullScreen
                        src={ 'http://www.youtube.com/embed/' + this.props.videoId + '?autoplay=1' }>
                        </iframe>
                    </div>
                    
                    <VideoTitleContainer 
                    snippet={ this.state.videoInfo.snippet || {} }
                    videoId={ this.state.videoInfo.id }
                    statistics={ this.state.videoInfo.statistics || {} }
                    handleLike={ this.handleLike }
                    handleDislike={ this.handleDislike } />
                    
                    <VideoDescriptionBox 
                    snippet={ this.state.videoInfo.snippet || {} } />

                    <CommentsContainer />
        
                </section>

                <section className='rightside_videos_wrapper'>        
                    <RecommendedVideosContainer
                    videoList={ this.state.videoList || [{}] } />
                </section>

            </section>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        videoId: ownProps.match.params.videoId
    }
}

export default connect(mapStateToProps, {  } )(VideoPage);

