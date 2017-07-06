import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideosContainer from './VideosContainer/VideosContainer';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SubscriptionNotify from './../SubscribeNotify/SubscribeNotify';
import UnsubscribeNotify from './../UnsubscribeNotify/UnsubscribeNotify';

import {handleSubscription} from './../../ducks/reducer'
import './LandingPage.css';

// AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY //


class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            notify: false,
            unsubNotify: false,
            canSubscribe: true,
        }
        this.handleSubscription = this.handleSubscription.bind(this)
        this.handleUnsubscription = this.handleUnsubscription.bind(this)
}

    handleSubscription(str){
        this.setState({
            notify:true,
            canSubscribe: false,
        })
        setTimeout(()=> {
            this.setState({
                notify: false,
            })
        }, 2500)
        this.props.handleSubscription();
        axios.post(`/api/subscribe/${ str }`)
    }

    handleUnsubscription(str){
        this.setState({
            unsubNotify:true,
            canSubscribe: true,
        })
        setTimeout(()=> {
            this.setState({
                unsubNotify: false,
            })
        }, 2500)
        axios.delete(`/api/unsubscribe/${ str }`)
    }

    componentDidMount(){
        document.body.scrollTop = 0;
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
        let unsubNotifyPrompt = null;
        if(this.state.unsubNotify){
            unsubNotifyPrompt = <UnsubscribeNotify/>
        }
        return (
            <section className='landing_main_container'>
                <div className="landing_words">
                    { notifyPrompt }
                    { unsubNotifyPrompt }
                    <ul className="landing">
                        <li id="landing">Home</li>
                        <li id="landing">Trending</li>
                        { subscriptionsBttn }
                    </ul>
                </div>
                <VideosContainer 
                subscribe={ this.handleSubscription } 
                unsubscribe={ this.handleUnsubscription }
                canSubscribe={this.state.canSubscribe}
                />
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
