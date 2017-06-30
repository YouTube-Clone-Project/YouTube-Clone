import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import watch_later from './../../../Header/img/watch_later.png';
import bullet from './../../../Header/img/bullet.png';
import './SubscriptionsVideos.css'

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
        }

        this.displayDate = this.displayDate.bind(this);
        this.getViews = this.getViews.bind(this);
    }

    componentDidMount(){
        console.log(this.props.channelName)
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${ this.props.channelName }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videosArr => {
            this.setState({
                videosArr: videosArr.data.items,
            })
            
        })
    }
    
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

    getViews(){
       return Math.floor(Math.random() * 899 + 1) + ',' + Math.floor(Math.random() * 899 + 100) + ' views';
    }

    render(){
        let videos = this.state.videosArr;
        return(
            <div id="main_subscriptions_video_container">
                { videos.map( (video, id) => {
                    return <Link to={'/video/' + videos[id].id.videoId}>
                                <div key={ id } className="subscriptions_info_container">
                                    <img id="subscriptions_info_img"src={videos[id].snippet.thumbnails.medium.url}/>
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
