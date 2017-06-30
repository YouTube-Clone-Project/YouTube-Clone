import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SubscriptionsContainer from './SubscriptionsContainer/SubscriptionsContainer';


import './SubscriptionsPage.css';

export default class SubscriptionPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
            return (
                <section className='subscription_main_container'>
                    <div className="subscription_words">
                        <ul className="subscription">
                            <li id="subscription"><Link to='/'>Home</Link></li>
                            <li id="subscription">Trending</li>
                            <li id="subscription">Subscriptions</li>
                        </ul>
                    </div>
                    <div id="subscriptions_title">
                        <p>From Your Channels</p>
                    </div>
                    <SubscriptionsContainer/>
                </section>
        )
    }


}
    