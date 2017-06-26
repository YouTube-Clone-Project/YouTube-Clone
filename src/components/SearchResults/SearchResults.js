import React from 'react'
import {Component} from 'react';
import bullet from './../Header/img/bullet.png'
import axios from 'axios';
import { connect } from 'react-redux'

import watch_later from './../Header/img/watch_later.png';
import './SearchResults.css'

class SearchResults extends Component{

    constructor(props){
        super(props);
        this.state = {
            videoArr: [
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
            ],

        }

        this.getViews = this.getViews.bind(this)
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=CAoQAA&q=${this.props.userInput }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
            this.setState({
                videoArr: videoArr.data.items
            })
            console.log(this.state)
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
        let videos = this.state.videoArr;
        console.log(videos)
        return (
            <section className='main_search_container'>
                <section className='main_video_search_container'>
                    {videos.map( (video, id) => {
                        return <div  key={ id }id='search_video_container'>
                        <div id="video_display_container">
                            <img id="search_video_img" src={ videos[id].snippet.thumbnails.medium.url} />
                            <div className="watch_container">
                                <img id="watch_later" src={watch_later}/>
                            </div>
                        </div>
                        <div className="search_words_container">
                            <h1 id="search_video_title">{videos[id].snippet.title}</h1>
                            <h2 id="search_video_channel">{videos[id].snippet.channelTitle}</h2>
                            <ul>
                                <li>{this.displayDate(videos[id].snippet.publishedAt)}</li>
                                <li><img id="bullet_img" src={bullet}/></li>
                                <li>{this.getViews()}</li>
                            </ul>
                            <p id="search_video_desc">{videos[id].snippet.description}</p>
                        </div>
                    </div>
                    }
                    )}
                </section>
            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        userInput: ownProps.match.params.userInput
    }
}

export default connect(mapStateToProps, {})(SearchResults);