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

    // constructor(props){
    //     super(props);
        
    //     this.state = {
    //         videosArr: [],
    //     }
    // }

    // componentDidMount(){
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${ userSearch }&type=video&key=AIzaSyA6QnEmVEZ_b2ZQO8GLc7CTEU3g-xDyhFY`).then( videosArr => {
    //         this.setState({
    //             videosArr: videosArr.data
    //         })
    //     })
    // }


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
                            <input placeholder="Search" />
                            <div id="search_bttn">
                                {/*<img src={ search }/>*/}
                                <div className="search_img"></div>
                            </div>
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