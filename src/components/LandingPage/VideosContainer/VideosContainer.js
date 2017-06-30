import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import ChannelContainer from './ChannelContainer/ChannelContainer'

import './VideosContainer.css'


export default class VideosContainer extends Component{
    
    render(){
        return(
            <section className="main_video_container">
                <div id="main_container">
                    <ChannelContainer 
                    subscribeTo={ this.props.subscribe } 
                    unsubscribeTo={ this.props.unsubscribe } 
                    search="moana+songs" 
                    canSubscribe = {this.props.canSubscribe}
                    />
                    <ChannelContainer subscribeTo={ this.props.subscribe } unsubscribeTo={ this.props.unsubscribe } search="new+zealand+lotr" canSubscribe = {this.props.canSubscribe}/>
                    <ChannelContainer subscribeTo={ this.props.subscribe } unsubscribeTo={ this.props.unsubscribe } search="best+react+tutorial" canSubscribe = {this.props.canSubscribe}/>
                    <ChannelContainer subscribeTo={ this.props.subscribe } unsubscribeTo={ this.props.unsubscribe } search="funny+cat+videos" canSubscribe = {this.props.canSubscribe}/>
                    <section id="load_more_container">
                        <div id="load_more">Load more</div>
                    </section>
                </div>
                
            </section>
    )
    }
    
}
