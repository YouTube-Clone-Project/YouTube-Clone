import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './RecommendedVideosContainer.css';

class RecommendedVideosContainer extends Component {
    constructor(props){
        super(props);

        this.state = {}

        this.getViews = this.getViews.bind(this);
    }

    getViews(){
        let viewCount = Math.floor(Math.random() * 999) + ',' + Math.floor(Math.random() * 899 + 100)
        return viewCount + ' views';
    }

    formatTitle(str){
        if (str.length > 84){
            str = str.split('').slice(0, 84).join('') + '...';
        }
        return str;
    }

    formatChannelTitle(str){
        if (str.length > 28){
            str = str.split('').slice(0, 28).join('') + '...';
        }
        return str;
    }

    render() {
        let videos = this.props.videoList;
        return (
            <div className='more_videos_container'>
                { 
                videos.map( (video, index) => {
                    return  <Link to={ '/video/' + videos[index].id.videoId }>
                                <div key={ index } className='video_box'>
                                    <img className='video_box_img' src={ videos[index].snippet.thumbnails.medium.url } />
                                    <h4 className='video_box_title'>{ this.formatTitle(videos[index].snippet.title) }</h4>
                                    <h6 className='video_box_channel'>{ this.formatChannelTitle(videos[index].snippet.channelTitle) }</h6>
                                    <p className='video_box_views' > { this.getViews() } </p>
                                </div>
                            </Link>
                }) 
                }
            </div>
        );
    }
}

export default RecommendedVideosContainer;

