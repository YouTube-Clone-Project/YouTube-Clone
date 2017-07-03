import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'

import check from './../Header/img/check2.png';
import './UnsubscribeNotify.css';

export default class UnsubscribeNotify extends Component{
    constructor(props){
        super(props);
        this.state={
            subscribed: false,
        }
    }

    render(){
        return (
            <section className="unsub_main_notify_section">
                <div id="unsub_notify_div">
                    <img src={check}/>
                    <p>Subscription removed</p>
                </div>
            </section>
        )
    }
}