import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import axios from 'axios';


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
                },
            //     statistics: {}
            // },
                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                },

                {
                    snippet:{
                        thumbnails: {
                            medium: {},
                        },
                    },
                }
            ],
        }
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${ this.props.search }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videosArr => {
            this.setState({
                videosArr: videosArr.data.items
            })
            console.log(this.state)
        })
    }


    render(){
        let videos = this.state.videosArr;
        return(
            <div id="main_videos_container">
                <div id="video_channel_name">{videos[0].snippet.channelTitle}</div>
                {this.state.videosArr.map( (video, id) => {
                    return <div key={ id } className="videos_info_container">
                            <img id="video_info_img"src={videos[id].snippet.thumbnails.medium.url}/>
                            <h1>{videos[id].snippet.title}</h1>
                            <h2>{videos[id].snippet.channelTitle}</h2>
                            <p>{videos[id].statistics} * {videos[id].snippet.publishedAt}</p>
                          </div>
                } )}
            </div>
        )
    }
    
}
