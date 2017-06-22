import React from 'react'
import { connect } from 'react-redux'
import ChannelContainer from './ChannelContainer/ChannelContainer'

import './VideosContainer.css'

export default function videoContainer(){
    return(
        <section className="main_video_container">
            <div id="main_container">
                <ChannelContainer search="moana"/>
                <ChannelContainer search="meditation+music"/>
                <ChannelContainer search="funny+cat+videos"/>
                <ChannelContainer search="DisneyMusicVEVO"/>
            </div>
        </section>
    )
}
