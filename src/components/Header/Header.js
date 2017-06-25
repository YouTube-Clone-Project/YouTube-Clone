import React from 'react';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Header.css';
// import hamburger from './img/hamburger.svg';
import logo from './img/logo.png';
import search from './img/search_icon.png';
import notification from './img/notification.png';
import signIn from './img/photo.jpg';

export default class header extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            videosArr: [],
            searchInput: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange( event ){
        this.setState({
            searchInput: event.target.value,
        })
        console.log(this.state)
    }

    render(){
        return(
            <section className="main_header_section">
                <div className="main_header_div">
                    <ul id="menu_logo">
                        <li className="header_hamburger">
                            <div className="hamburger_bar"></div>
                            <div className="hamburger_bar"></div>
                            <div className="hamburger_bar"></div>
                            {/*<img src={ hamburger }/>*/}
                        </li>
                        <Link to="/">
                            <li className="header_logo">
                                <img src={ logo } />
                            </li>
                        </Link>
                    </ul>
                    <section className="header_search">
                            <input onChange={ this.handleInputChange } placeholder="Search" />
                                <Link to={'/search/' + this.state.searchInput}>
                                    <div id="search_bttn">
                                        <div className="search_img"></div>
                                    </div>
                                </Link>
                    </section>
                    <section className="upload">
                        <div id="upload">
                        </div>
                    </section>
                    <ul id="notification_signin">
                        <li id="notifications"></li>
                        <li id="sign_in">
                            <img src={ signIn }/>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
    
    
    
}