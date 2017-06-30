import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideosContainer from './VideosContainer/VideosContainer';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SubscriptionNotify from './../SubscribeNotify/SubscribeNotify';
import {handleSubscription} from './../../ducks/reducer'
import './LandingPage.css';

// AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY //


class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            notify: false
        }
        this.handleSubscription = this.handleSubscription.bind(this)
    }

    handleSubscription(str){
        this.setState({
            notify:true,
        })
        setTimeout(()=> {
            this.setState({
                notify: false,
            })
        }, 2500)
        this.props.handleSubscription();
        axios.post(`/api/subscribe/${ str }`)
    }

    render() {
        let subscriptionsBttn = null;
        if(this.props.subscription){
           subscriptionsBttn = <li id="landing"><Link to="subscriptions">Subscriptions</Link></li>
        }
        let notifyPrompt = null;
        if(this.state.notify){
            notifyPrompt = <SubscriptionNotify/>
        }
        return (
            <section className='landing_main_container'>
                <div className="landing_words">
                    { notifyPrompt }
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

function mapStateToProps(state){
    return {
        subscription: state.subscriptions
    }
}

export default connect(mapStateToProps, { handleSubscription } )(LandingPage);