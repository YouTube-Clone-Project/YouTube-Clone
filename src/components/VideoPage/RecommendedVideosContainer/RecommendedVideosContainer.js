import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './RecommendedVideosContainer.css';

class RecommendedVideosContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            views: [130816, 451398, 52145, 958321, 1212568, 212550, 998201, 148521, 94236, 623015]
        }

        this.getViews = this.getViews.bind(this);
    }

    getViews(index){
        return this.state.views[index].toLocaleString();
    }

    formatTitle(str){
        if (str.length > 75){
            str = str.split('').slice(0, 75).join('') + '...';
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
                                    <h5 className='video_box_title'>{ this.formatTitle(videos[index].snippet.title) }</h5>
                                    <h6 className='video_box_channel'>{ this.formatChannelTitle(videos[index].snippet.channelTitle) }</h6>
                                    <p className='video_box_views' > { this.getViews(index) } </p>
                                </div>
                            </Link>
                }) 
                }
            </div>
        );
    }
}

export default RecommendedVideosContainer;

