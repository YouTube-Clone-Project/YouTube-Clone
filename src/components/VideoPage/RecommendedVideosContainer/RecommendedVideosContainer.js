import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './RecommendedVideosContainer.css';

class RecommendedVideosContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            videoList: [
                { 
                    snippet: {
                        thumbnails: {
                            medium: {
                                url: ''
                            }
                        }
                    },
                    id: {
                        videoId: ''
                    } 
                }
            ]
        }

        this.getViews = this.getViews.bind(this)
    }

    // componentWillReceiveProps( nextProps ) {
    //     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ this.props.snippet.tags[1] }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY')
    //     .then( res => {
    //         this.setState({
    //             videoList: res.data.items
    //         })
    //     })
    // }

    componentDidMount(){
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ this.props.snippet.tags[1] + "+" + this.props.snippet.tages[0] }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY')
        .then( res => {
            this.setState({
                videoList: res.data.items
            })
        })
    }

    getViews(){
        let viewCount = Math.floor(Math.random() * 999) + ',' + Math.floor(Math.random() * 899 + 100)
        return viewCount + ' views';
    }

    render() {
        let videos = this.state.videoList;
        return (
            <div className='more_videos_container'>
                { 
                videos.map( (video, index) => {
                    return  <Link to={ '/video/' + videos[index].id.videoId }>
                                <div key={ index } className='video_box'>
                                    <img className='video_box_img' src={ videos[index].snippet.thumbnails.medium.url } />
                                    <h4 className='video_box_title'>{ videos[index].snippet.title }</h4>
                                    <h6 className='video_box_channel'>{ videos[index].snippet.channelTitle }</h6>
                                    <p className='video_box_views' > { this.getViews() } </p>
                                </div>
                            </Link>
                }) 
                }
            </div>
        );
    }
}

export default RecommendedVideosContainer;

