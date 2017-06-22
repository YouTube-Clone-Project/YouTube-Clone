import React, { Component } from 'react';

import './VideoTitleContainer.css';

class VideoTitleContainer extends Component {


    render() {
        let {
            snippet,
            statistics,
            id
        }=this.props
        return (
            <div className='video_title_wrapper'>
                <div className='video_title_container'>
                    <h3 className='video_title'>{ snippet.title }</h3>
                    <div className='channel_thumbnail'></div>
                    <p className='channel_title'>{ snippet.channelTitle }</p>
                    <div className='subscribe_button'>Subscribe</div>
                    <h2 className='view_count'>{ statistics.viewCount } views</h2>
                    <div className='line'></div>
                    <div className='video_title_bottom'>
                        <ul className='add_share_list'>
                            <li>
                                <img src='' />
                                <p>Add to</p>
                            </li>
                            <li>
                                <img src='' />
                                <p>Share</p>
                            </li>
                            <li>
                                <img src='' />
                                <p>More</p>
                            </li>
                        </ul>
                        <ul className='like_dislike_list'>
                            <li>
                                <img src='' />
                                <p>{ statistics.likeCount }</p>
                            </li>
                            <li>
                                <img src='' />
                                <p>{ statistics.dislikeCount }</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoTitleContainer;