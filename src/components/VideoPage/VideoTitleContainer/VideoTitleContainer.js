import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {handleSubscription} from './../../../ducks/reducer'

import './VideoTitleContainer.css';

class VideoTitleContainer extends Component {
    constructor(props){
        super(props);

        this.state={
            subscribers: Math.floor(Math.random() * 80 + 1)
        }

    }

    componentWillReceiveProps(newProps){
        if (newProps != this.props){
            this.props = newProps;
        }
    }

    subscribeTo(str){
        this.props.handleSubscription();
        axios.post(`/api/subscribe/${ str }`)
    }

    render() {
        let {
            snippet,
            statistics,
            id
        }=this.props;
        return (
            <div className='video_title_wrapper'>
                <div className='video_title_container'>
                    <h3 className='video_title'>{ snippet.title }</h3>
                    <div className='channel_thumbnail'></div>
                    <div className='channel_container'>
                        <p key={1} className='channel_title'>{ snippet.channelTitle }</p>
                        <div key={2} className='subscribe_button'onClick= { ()=> this.subscribeTo(snippet.channelTitle) }>
                            <div className='subscribe_play_button'></div>
                            <p>Subscribe</p>
                            <div className='num_subscribers_box'>
                                <p className='num_subscribers'>{ this.state.subscribers }K </p>
                            </div>
                        </div>
                    </div>
                    <h2 className='video_view_count'> { Number(statistics.viewCount).toLocaleString() } views</h2>
                    <div className='video_title_line'></div>
                    <div className='video_title_bottom'>
                        <ul className='add_share_list'>
                            <li className='video_title_add_box'>
                                <div className='video_title_plus_button'></div>
                                <p>Add to</p>
                            </li>
                            <li>
                                <div className='video_title_share_arrow'></div>
                                <p>Share</p>
                            </li>
                            <li>
                                <div className='video_title_more_dots'></div>
                                <p>More</p>
                            </li>
                        </ul>
                        <ul className='like_dislike_list'>
                            <li>
                                <div className='video_title_like_thumb'
                                    onClick={ this.props.handleLike } ></div>
                                <p>{ Number(statistics.likeCount).toLocaleString() }</p>
                            </li>
                            <li>
                                <div className='video_title_dislike_thumb'
                                    onClick={ this.props.handleDislike } ></div>
                                <p>{ Number(statistics.dislikeCount).toLocaleString() }</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        subscription: state.subscriptions
    }
}

export default connect(mapStateToProps, { handleSubscription } )(VideoTitleContainer);
