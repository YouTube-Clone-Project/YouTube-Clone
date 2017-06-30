import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import VideoTitleContainer from './VideoTitleContainer/VideoTitleContainer.js';
import ShareLinkBox from './ShareLinkBox/ShareLinkBox.js';
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
            uniqueId: Math.floor(Math.random()*999),
            notify: false,
            showShareBox: false
        }

        this.handleDislike = this.handleDislike.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleShowSharebox = this.handleShowSharebox.bind(this);
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet,statistics`)
        .then( videoInfo => {
            videoInfo = videoInfo.data.items[0];
            if (videoInfo.snippet.tags){
                if (videoInfo.snippet.tags[0] && videoInfo.snippet.tags[1] && videoInfo.snippet.tags[2]){
                    var searchTerm = videoInfo.snippet.tags[0] + '+' + videoInfo.snippet.tags[1] + '+' + videoInfo.snippet.tags[2];
                }else{
                    var searchTerm = 'funny+cats'
                }
            }
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ searchTerm }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`)
            .then( RecommendedVideos => {
                this.setState({
                    videoInfo: videoInfo,
                    videoList: RecommendedVideos.data.items
                })
            })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if ( this.props !== prevProps ){
            axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI&part=snippet,statistics`)
            .then( videoInfo => {
                videoInfo = videoInfo.data.items[0];
                if (videoInfo.snippet.tags){
                    if (videoInfo.snippet.tags[1] && videoInfo.snippet.tags[4] && videoInfo.snippet.tags[2]){
                        var searchTerm = videoInfo.snippet.tags[1] + '+' + videoInfo.snippet.tags[4] + '+' + videoInfo.snippet.tags[2];
                    }else{
                        var searchTerm = 'funny+cats'
                    }
                }
                axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ searchTerm }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`)
                .then( RecommendedVideos => {
                    this.setState({
                        videoInfo: videoInfo,
                        videoList: RecommendedVideos.data.items
                    })
                })
            })
        }
    }

    handleShowSharebox(){
        this.setState({
            showShareBox: !this.state.showShareBox
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
        let shareLinkBox = null;
        if (this.state.showShareBox){
            shareLinkBox = <ShareLinkBox />
        }

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
                    snippet={ this.state.videoInfo.snippet || {title: ''} }
                    videoId={ this.state.videoInfo.id }
                    statistics={ this.state.videoInfo.statistics || {} }
                    handleLike={ this.handleLike }
                    handleDislike={ this.handleDislike } 
                    showShareBox={ this.handleShowSharebox } />

                    { shareLinkBox }
                    
                    <VideoDescriptionBox 
                    snippet={ this.state.videoInfo.snippet || {} } />

                    <CommentsContainer
                    videoId={ this.state.videoInfo.id } />
        
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

