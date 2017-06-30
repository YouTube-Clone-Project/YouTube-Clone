import React, { Component } from 'react';

import './ShareLinkBox.css';

class ShareLinkBox extends Component {
    constructor(props){
        super(props);

        this.state={
            startTime: '0:00',
            url: 'https://youtu.be/WYeDsa4Tw0c',
            checkboxMarked: false
        }

        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.updateURL = this.updateURL.bind(this);
        this.markCheckBox = this.markCheckBox.bind(this);
    }

    handleURLChange(e){
        this.setState({
            url: e.target.value
        })
    }

    handleStartTimeChange(e){
        this.setState({
            startTime: e.target.value
        })
    }   

    updateURL(e){
        e.preventDefault();
        let time = this.state.startTime.split(':');
        let min = time[0];
        let sec = time[1];
        if (this.state.checkboxMarked){
            this.setState({
                url: this.state.url + `?t=${min}m${sec}s`
            })
        }
    }    

    markCheckBox(){
        this.setState({
            checkboxMarked: !this.state.checkboxMarked
        })
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

                    <input className='share_url' 
                    value={ this.state.url } 
                    onChange={ this.handleURLChange } />

                    <div className='share_startat_container'>
                        <input className='start_checkbox' type='checkbox' onChange={ this.markCheckBox } />
                        <p className='start_at_p'>Start at:</p>
                        <form onSubmit={ this.updateURL }>
                            <input className='share_start_time' 
                            value={ this.state.startTime } 
                            onChange={ this.handleStartTimeChange } />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareLinkBox;