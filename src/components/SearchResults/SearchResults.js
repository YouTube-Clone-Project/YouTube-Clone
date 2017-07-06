import React from 'react'
import {Component} from 'react';
import bullet from './../Header/img/bullet.png'
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import watch_later from './../Header/img/watch_later.png';
import dropdown from '../Header/img/drop_down_arrow.png';
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
            filterClicked: false,
            pagination: {},
            views: [
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
                Math.floor(Math.random() * 1500000 + 1).toLocaleString() + ' views',
            ],
            numberOfResults: Math.floor(Math.random() * 5000000 + 1).toLocaleString()
        }

        this.getViews = this.getViews.bind(this)
        this.getResults = this.getResults.bind(this)
        this.filterClickedFn = this.filterClickedFn.bind(this)
        this.getPrevPage = this.getPrevPage.bind(this)
        this.getNextPage = this.getNextPage.bind(this)
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=CAoQAA&q=${this.props.userInput }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
            this.setState({
                videoArr: videoArr.data.items,
                pagination: videoArr.data
            })
            console.log(this.state.pagination)
        })
        document.body.scrollTop = 0;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props !== prevProps){
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=CAoQAA&q=${this.props.userInput }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
                this.setState({
                    videoArr: videoArr.data.items,
                    pagination: videoArr.data
                })
            })
        }
        document.body.scrollTop = 0;
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

    getViews(index){
       return this.state.views[index];
    }

    getResults(){
        return 'About ' + this.state.numberOfResults + ' results'
    }
    filterClickedFn(){
        this.setState({
            filterClicked: !this.state.filterClicked
        })
    }

    getPrevPage(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=${ this.state.pagination.prevPageToken }&q=${this.props.userInput }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
            this.setState({
                videoArr: videoArr.data.items,
                pagination: videoArr.data
            })
            console.log(this.state.pagination)
        })
    }

    getNextPage(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=${ this.state.pagination.nextPageToken }&q=${this.props.userInput }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
            this.setState({
                videoArr: videoArr.data.items,
                pagination: videoArr.data
            })
            console.log(this.state.pagination)
        })
    }


    render(){
        let filterBttn = null
        if(this.state.filterClicked){
            filterBttn = <section id="menu_dropdown">
                <ul className="first_column">
                    <li>Upload date</li>
                    <li>Today</li>
                    <li>This week</li>
                    <li>This month</li>
                    <li>This year</li>
                </ul>
                <ul className="second_column">
                    <li>Type</li>
                    <li>Video</li>
                    <li>Channel</li>
                    <li>Playlist</li>
                    <li>Movie</li>
                    <li>Show</li>
                </ul>
                <ul className="third_column">
                    <li>Duration</li>
                    <li>Short</li>
                    <li>Long (> 20 minutes)</li>
                </ul>
                <ul className="fourth_column">
                    <li>Features</li>
                    <li>4K</li>
                    <li>HD</li>
                    <li>Subtitles/CC</li>
                    <li>Creative Commons</li>
                    <li>3D</li>
                    <li>Live</li>
                    <li>Purchased</li>
                    <li>360&deg;</li>
                </ul>
                <ul className="fifth_column">
                    <li>Sort by</li>
                    <li>Relevance</li>
                    <li>Upload date</li>
                    <li>Rating</li>
                </ul>
            </section>
        } else {
            filterBttn = null;
        }
        let videos = this.state.videoArr;
        console.log(videos)
        return (
            <section className='main_search_container'>

                <section id="first_box">
                    <div id="filter_bttn" onClick={ this.filterClickedFn }>
                        <h1>Filters</h1>
                        <img src={ dropdown } />
                    </div>
                    <h2>{ this.getResults() }</h2>
                </section>

                { filterBttn }

                <section className='main_video_search_container'>
                    {videos.map( (video, id) => {
                        return <div  key={ id }id='search_video_container'>
                        <Link to={ '/video/' + videos[id].id.videoId }><div id="video_display_container">
                            <img id="search_video_img" src={ videos[id].snippet.thumbnails.medium.url} />
                            <div className="watch_container">
                                <img id="watch_later" src={watch_later}/>
                            </div>
                        </div></Link>
                        <div className="search_words_container">
                            <Link to={ '/video/' + videos[id].id.videoId }><h1 id="search_video_title">{videos[id].snippet.title}</h1></Link>
                            <h2 id="search_video_channel">{videos[id].snippet.channelTitle}</h2>
                            <ul>
                                <li>{this.displayDate(videos[id].snippet.publishedAt)}</li>
                                <li><img id="bullet_img" src={bullet}/></li>
                                <li>{ this.getViews(id) }</li>
                            </ul>
                            <p id="search_video_desc">{videos[id].snippet.description}</p>
                        </div>
                    </div>
                    }
                    )}
                    <section className="pagination_bttn">
                        <div id="prev_bttn" onClick={ this.getPrevPage }><p>&#171; Previous</p></div>
                        <div id="next_bttn" onClick={ this.getNextPage }><p>Next &#187;</p></div>
                    </section>
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