import React, { Component } from 'react';

import './ShareLinkBox.css';

class ShareLinkBox extends Component {
    constructor(props){
        super(props);

        this.state={
            startTime: '0:00',
            url: 'https://youtu.be/WYeDsa4Tw0c'
        }
    }
        

    render() {

        return (
            <div className='share_box_wrapper'>
                <div className='share_box_container'>

                    <div className='share_box_header'>
                        <ul>
                            <li id='share_box_share'>Share</li>
                            <li>Embed</li>
                            <li>Email</li>
                        </ul>
                        <p className='share_close_x'>x</p>
                    </div>

                    <div className='share_social_media'>
                        <div id='sm_twitter'></div>
                        <div id='sm_facebook'></div>
                        <div id='sm_google'></div>
                        <div id='sm_blogger'></div>
                        <div id='sm_reddit'></div>
                        <div id='sm_tumblr'></div>
                        <div id='sm_pinterest'></div>
                        <div id='sm_blue_russian'></div>
                        <div id='sm_linkedin'></div>
                        <div id='sm_stumbleupon'></div>
                        <div id='sm_orange_russian'></div>
                        <div id='sm_livejournal'></div>
                        <div id='sm_digg'></div>
                    </div>

                    <input className='share_url' value={ this.state.url } />

                    <div className='share_startat_container'>
                        <input className='start_checkbox' type='checkbox' />
                        <p className='start_at_p'>Start at:</p>
                        <input className='share_start_time' value={ this.state.startTime } />
                    </div>

                </div>
            </div>
        );
    }
}

export default ShareLinkBox;