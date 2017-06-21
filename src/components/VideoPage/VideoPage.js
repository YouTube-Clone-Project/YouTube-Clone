import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'

import './VideoPage.css';

class VideoPage extends Component {

    render() {
        return (
        <section className='videopage_main_container'>

          <div className='more_videos_placeholder'></div>

          <div className='iframe_placeholder'>
            <div className='iframe'></div>
          </div>

          <div className='video_title_wrapper'>
            <div className='video_title_container'>
              <h2>Video Title</h2>
            </div>
          </div>
        

        </section>
        );
    }
}

export default VideoPage;