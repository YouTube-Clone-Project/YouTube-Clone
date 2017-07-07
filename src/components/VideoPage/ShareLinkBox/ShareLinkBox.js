import React, { Component } from 'react';

import './ShareLinkBox.css';

class ShareLinkBox extends Component {
    constructor(props){
        super(props);

        this.state={
            startTime: '0:00',
            url: `https://youtu.be/${ this.props.videoId }`,
            checkboxMarked: false
        }

        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.markCheckBox = this.markCheckBox.bind(this);
    }

    componentWillReceiveProps(newProps){
        if (this.props !== newProps){
            this.props = newProps;
        }
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

    markCheckBox(){
        console.log('hi')
        let time = this.state.startTime.slice();
        let min, sec;
        if (time.indexOf(':') > 0){
            time = this.state.startTime.split(':');
            min = parseInt(time[0], 10);
            sec = parseInt(time[1], 10);
        }else{
            sec = parseInt(time, 10);
        }
        let newURL = this.state.url.split('').slice();
        if (this.state.checkboxMarked){
            newURL.splice(newURL.indexOf('?'))
            newURL = newURL.join('');
            this.setState({
                checkboxMarked: false,
                url: newURL
            })
        }else{
            if (min !== 0 || sec !== 0){
                if (min && sec){
                    this.setState({
                        url: this.state.url + `?t=${min}m${sec}s`,
                        checkboxMarked: true
                    })
                }else if (min && !sec){
                    this.setState({
                        url: this.state.url + `?t=${min}m`,
                        checkboxMarked: true
                    })
                }else if (!min && sec){
                    this.setState({
                        url: this.state.url + `?t=${sec}s`,
                        checkboxMarked: true
                    })
                }
            }
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

                    <input className='share_url' 
                    value={ this.state.url } 
                    onChange={ this.handleURLChange } />

                    <div className='share_startat_container'>
                        <input className='start_checkbox' type='checkbox' onChange={ this.markCheckBox } />
                        <p className='start_at_p'>Start at:</p>
                        <input className='share_start_time' 
                        value={ this.state.startTime } 
                        onChange={ this.handleStartTimeChange } />
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareLinkBox;