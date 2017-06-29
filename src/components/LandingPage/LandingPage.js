import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideosContainer from './VideosContainer/VideosContainer';
import { Link } from 'react-router-dom'
import axios from 'axios'

import './LandingPage.css';

// AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY API KEY ////


class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            subscriptions: false
        }

        this.handleSubscription = this.handleSubscription.bind(this)
    }

    handleSubscription(str){
        this.setState({
            subscriptions: true
        })
        axios.post(`/api/subscribe/${ str }`)
    }

    render() {
        let subscriptionsBttn = null;
        if(this.state.subscriptions){
           subscriptionsBttn = <li id="landing">Subscriptions</li>
        }
        return (
            <section className='landing_main_container'>
                <div className="landing_words">
                    <ul className="landing">
                        <li id="landing">Home</li>
                        <li id="landing">Trending</li>
                        { subscriptionsBttn }
                    </ul>
                </div>
                <VideosContainer subscribe={ this.handleSubscription }/>
            </section>
            
        );
    }
}

export default LandingPage;