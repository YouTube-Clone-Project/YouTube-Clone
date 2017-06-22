import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideosContainer from './VideosContainer/VideosContainer';
import { Link } from 'react-router-dom'
import axios from 'axios'

import './LandingPage.css';

// AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY API KEY ////


class LandingPage extends Component {
    
    render() {
        return (
            <section className='landing_main_container'>
                <div className="landing_words">
                    <ul className="landing">
                        <li id="landing">Home</li>
                        <li id="landing">Trending</li>
                        <li id="landing">Subscriptions</li>
                    </ul>
                </div>
                <VideosContainer />
            </section>
            
        );
    }
}

export default LandingPage;