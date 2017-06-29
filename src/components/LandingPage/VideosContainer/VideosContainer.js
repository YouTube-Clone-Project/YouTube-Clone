import React from 'react'
import { connect } from 'react-redux'
import ChannelContainer from './ChannelContainer/ChannelContainer'

import './VideosContainer.css'


export default function videoContainer(){
    return(
        <section className="main_video_container">
            <div id="main_container">
                <ChannelContainer search="moana+songs"/>
                <ChannelContainer search="new+zealand+travel+video"/>
                <ChannelContainer search="best+react+tutorial"/>
                <ChannelContainer search="funny+cat+videos"/>
                <section id="load_more_container">
                    <div id="load_more">Load more</div>
                </section>
            </div>
            
        </section>
    )
}
