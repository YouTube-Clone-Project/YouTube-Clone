import React from 'react'
import {Component} from 'react';
import bullet from './../img/bullet.png'
import Header from './../Header.js'
import axios from 'axios;'
import './SearchResults.css'

export default class SearchResults extends Component{

    constructor(props){
        super(props);
        this.state = {
            videoArr: [],
        }

        this.getViews = this.getViews.bind(this)
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=moana&type=video&videoDefinition=high&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videoArr => {
            this.setState({
                videoArr: videoArr.data.items
            })
            console.log(this.state)
        })
        
    }

    getViews(){
       return Math.floor(Math.random() * 899 + 1) + ',' + Math.floor(Math.random() * 899 + 100) + ' views';
    }


    render(){
        return (
            <section className='main_search_container'>
                <div id='search_video_container'>
                    <img id="search_video_img" src="" />
                    <div className="search_words_container">
                        <h1 id="search_video_title">Title</h1>
                        <h2 id="search_video_channel">Channel</h2>
                        <ul>
                            <li>post date</li>
                            <li><img id="bullet_img" src={bullet}/></li>
                            <li>{this.getViews()}</li>
                        </ul>
                        <p id="search_video_desc">description of video</p>
                    </div>
                </div>
            </section>
        )
    }
}