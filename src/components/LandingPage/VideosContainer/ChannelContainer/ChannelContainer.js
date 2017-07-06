import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import watch_later from './../../../Header/img/watch_later.png';
import bullet from './../../../Header/img/bullet.png';
import './ChannelContainer.css'

export default class ChannelContainer extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            videosArr: [
                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                },
            //     statistics: {}
            // },
                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                    id: {
                        videoId: ''
                    }
                }
            ],
            canSubscribe: true
        }

        this.displayDate = this.displayDate.bind(this);
        this.getViews = this.getViews.bind(this);
        this.getSubscribers = this.getSubscribers.bind(this);
        this.testFn = this.testFn.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${ this.props.search }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videosArr => {
            this.setState({
                videosArr: videosArr.data.items,
            })
            axios.get(`/api/checkForSubscriptions/${ this.state.videosArr[0].snippet.channelTitle }`).then((response)=>{
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

                // if(!this.state.canSubscribe){
                //     let landingSubscribe = document.getElementById('landing_unsubscribe_bttn');
                //     let landingUnsubscribe = document.getElementById('landing_unsubscribe_bttn_hover');

                //     landingSubscribe.addEventListener("mouseenter", function(){
                //         landingSubscribe.style.display = 'none';
                //         landingUnsubscribe.style.display = 'block';
                //     })
                //     landingUnsubscribe.addEventListener("mouseleave", function(){
                //         landingSubscribe.style.display = 'block';
                //         landingUnsubscribe.style.display = 'none';
                //     })
                    
                // }
            })
            // console.log(this.state)
        })
        
    }

    // componentDidUpdate(){
    //     if(!this.state.canSubscribe){
    //         let landingSubscribe = document.getElementById('landing_unsubscribe_bttn');
    //         let landingUnsubscribe = document.getElementById('landing_unsubscribe_bttn_hover');

    //         landingSubscribe.addEventListener("mouseenter", function(){
    //             landingSubscribe.style.display = 'none';
    //             landingUnsubscribe.style.display = 'block';
    //         })
    //         landingUnsubscribe.addEventListener("mouseleave", function(){
    //             landingSubscribe.style.display = 'block';
    //             landingUnsubscribe.style.display = 'none';
    //         })
            
    //     }
    // }
    
    displayDate(dateStr){
        let dateObj = new Date(dateStr);
        let postedYear = dateObj.getFullYear();
        let postedMonth = dateObj.getMonth();
        let today= new Date();
        let todayMonth = today.getMonth();
        let thisYear = today.getFullYear();
        let howLongYear = thisYear - postedYear;
        let howLong = todayMonth - postedMonth;
        if(thisYear - postedYear === 0){
        if(Math.abs(howLong) > 1){
            return Math.abs(howLong) + ' months ago';
        } else{
            return Math.abs(howLong) + ' month ago';
            }
        }
        if(thisYear - postedYear > 0){
        if(Math.abs(howLongYear > 1)){
            return Math.abs(howLongYear) + ' years ago';
        } else {
            return Math.abs(howLongYear) + ' year ago';
        }
        
        }
        
    }

    handleSubscribe(str){
        this.setState({
            canSubscribe: false
        })
        this.props.subscribeTo(str)
    }

    handleUnsubscribe(str){
        this.setState({
            canSubscribe: true
        })
        this.props.unsubscribeTo(str)
    }

    getViews(){
       return Math.floor(Math.random() * 899 + 1) + ',' + Math.floor(Math.random() * 899 + 100) + ' views';
    }

    getSubscribers(){
        return Math.floor(Math.random() * 899) + ',' + Math.floor(Math.random() * 899 + 100);
    }

    testFn(){
        console.log('test');
    }
    render(){
        let landingSubbtn;
        let landingSubbtnTwo;
        if(this.state.canSubscribe){
            landingSubbtn = <div id="subscribe_bttn" onClick= { ()=> this.handleSubscribe(videos[0].snippet.channelTitle) }>
                    <div id="bttn_img">
                </div>Subscribe</div>
        } else {
            landingSubbtnTwo = <section>
                    {/*<div id="landing_unsubscribe_bttn" onClick= { ()=> this.handleUnsubscribe(videos[0].snippet.channelTitle) }>
                        <div id="unsub_bttn_img">
                    </div>Subscribed</div>*/}
                    
                    <div id="landing_unsubscribe_bttn_hover" onClick= { ()=> this.handleUnsubscribe(videos[0].snippet.channelTitle) }>
                        <div id="unsub_bttn_img_hover">
                    </div>Unsubscribe</div>
                </section>
        }




        
        let videos = this.state.videosArr;
        return(
            <div id="main_videos_container">
                <div id="video_channel_name">{videos[0].snippet.channelTitle}</div>
                { landingSubbtn }
                { landingSubbtnTwo }
                <div id="subscribers_count">{this.getSubscribers()}</div>
                <div id="not_interested_bttn"></div>
                { videos.map( (video, id) => {
                    return <Link to={'/video/' + videos[id].id.videoId}>
                                <div key={ id } className="videos_info_container">
                                    <img id="video_info_img"src={videos[id].snippet.thumbnails.medium.url}/>
                                    <h1>{videos[id].snippet.title}</h1>
                                    <div className="watch_container">
                                        <img id="watch_later" src={watch_later}/>
                                    </div>
                                    <h2>{videos[id].snippet.channelTitle}</h2>
                                    <ul>
                                        <li>{
                                            this.getViews()
                                        } </li> 
                                        <li><img src={bullet}/></li>
                                        <li>{
                                            this.displayDate(videos[id].snippet.publishedAt)
                                        } </li>
                                    </ul>
                            </div>
                          </Link>
                } )}
            </div>
        )
    }
    
}
