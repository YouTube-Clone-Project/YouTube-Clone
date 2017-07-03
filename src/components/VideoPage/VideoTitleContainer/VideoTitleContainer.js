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
            , canSubscribe: true
        }

    }

    componentWillReceiveProps(newProps){
        if (newProps != this.props){
            this.props = newProps;
        }
    }

    componentDidMount(){
        axios.get(`/api/checkForSubscriptions/${ this.props.snippet.channelTitle }`).then((response)=>{
                let arr = response.data;
                if (arr.length === 0){
                    this.setState({
                        canSubscribe: true
                    })
                }else if (arr.length > 0){
                    this.setState({
                        canSubscribe: false
                    })
                }
            })
        if(!this.state.canSubscribe){
            let subscribed = document.getElementById('unsubscribe_bttn')
            let unsubscribe = document.getElementById('unsubscribe_bttn_hover')
            document.getElementById('unsubscribe_bttn').addEventListener("mouseenter", function(){
                subscribed.style.display = 'none';
                unsubscribe.style.display = 'block';
            })
            unsubscribe.addEventListener("mouseleave", function(){
                subscribed.style.display = 'block';
                unsubscribe.style.display = 'none';
            })
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props != prevProps || this.state != prevState){
            if(!this.state.canSubscribe){
                // let subscribed = document.getElementById('unsubscribe_bttn')
                let unsubscribe = document.getElementById('unsubscribe_bttn_hover')
                document.getElementById('unsubscribe_bttn').addEventListener("mouseenter", function(){
                    document.getElementById('unsubscribe_bttn').style.display = 'none';
                    unsubscribe.style.display = 'block';
                })
                unsubscribe.addEventListener("mouseleave", function(){
                    document.getElementById('unsubscribe_bttn').style.display = 'block';
                    unsubscribe.style.display = 'none';
                })
            } 
        }
    }
    subscribeTo(str){
        axios.post(`/api/subscribe/${ str }`).then(()=>{
            this.props.notify();
            this.setState({
                canSubscribe: false
            })
            this.props.handleSubscription();
        });
        
    }

    unsubscribeTo(str){
        axios.delete(`/api/unsubscribe/${ str }`).then(()=>{
            this.setState({
                canSubscribe: true
            })
            this.props.unsubNotify();
        })
        

    }

    render() {
        let subbtn;
        let subbtnTwo;
        if(this.state.canSubscribe){
            subbtn = <section>
                    <div id="subscribe_bttn_test" className='subscribe_button'onClick= { ()=> this.subscribeTo(snippet.channelTitle) }>
                        <div className='subscribe_play_button'></div>
                        <p>Subscribe</p>
                        <div className='num_subscribers_box'>
                            <p className='num_subscribers'>{ this.state.subscribers }K </p>
                        </div>
                    </div>
                </section>
        } else{
            subbtnTwo = <section> 
                        <div id="unsubscribe_bttn" className='unsubscribe_button'>
                                <div className='unsubscribe_play_button'></div>
                                <p id="subscribe_words">Subscribed</p>
                                <div className='num_subscribers_box_unsub'>
                                    <p className='num_subscribers'>{ this.state.subscribers }K </p>
                                </div>
                        </div>
                        <div id="unsubscribe_bttn_hover" className='unsubscribe_button_hover'onClick= { ()=> this.unsubscribeTo(snippet.channelTitle) }>
                            <div className='unsubscribe_play_button_hover'></div>
                            <p id="unsubscribe_words">Unsubscribe</p>
                            <div className='num_subscribers_box_unsub'>
                                <p className='num_subscribers'>{ this.state.subscribers }K </p>
                            </div>
                        </div>
                    </section>
        }
        let {
            snippet,
            statistics,
            id
        }=this.props;
        return (
            <div className='video_title_wrapper'>
                <div className='video_title_container'>
                    <h3 className='video_title'>{ snippet.title }</h3>
                    <div className='channel_thumbnail' 
                    onClick={ ()=> {console.log(this.state.canSubscribe)} } >
                    </div>
                    <div className='channel_container'>
                        <p key={1} className='channel_title'>{ snippet.channelTitle }</p>
                        { subbtn }
                        { subbtnTwo }
                    </div>
                    <h2 className='video_view_count'> { Number(statistics.viewCount).toLocaleString() } views</h2>
                    <div className='video_title_line'></div>
                    <div className='video_title_bottom'>
                        <ul className='add_share_list'>
                            <li className='video_title_add_box'>
                                <div className='video_title_plus_button'></div>
                                <p>Add to</p>
                            </li>
                            <li onClick={ this.props.showShareBox } >
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
