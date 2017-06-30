import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'

import check from './../Header/img/check2.png';
import './SubscribeNotify.css';

export default class SubscribeNotify extends Component{
    constructor(props){
        super(props);
        this.state={
            subscribed: false,
        }
    }

    render(){
        return (
            <section className="main_notify_section">
                <div id="notify_div">
                    <img src={check}/>
                    <p>Subscription added</p>
                </div>
            </section>
        )
    }
}