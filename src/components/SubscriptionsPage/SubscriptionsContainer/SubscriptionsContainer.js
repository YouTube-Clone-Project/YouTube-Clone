import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import SubscriptionsVideos from './SubscriptionsVideos/SubscriptionsVideos'
import axios from 'axios';

import './SubscriptionsContainer.css'


export default class SubscriptionsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            videosArr: []
        }

    }

    componentDidMount(){
        axios.get('/api/subscriptions').then( (res) => {
            this.setState({
                videosArr: res.data
            })
            console.log(this.state.videosArr)
        })
    }

    render(){
        let videos = this.state.videosArr;
        return(
            <section className="main_subscriptions_container">
                <div id="subscriptions_container">
                { videos.map( (video, id) => {
                    return <SubscriptionsVideos key={ id } channelName={ JSON.stringify(video.channelname) }/>
                            
                    })
                }
                    <section id="load_more_container">
                        <div id="load_more">Load more</div>
                    </section>
                </div>
                
            </section>
        )
    }
    
}
