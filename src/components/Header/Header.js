import React from 'react';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MySideNav from './HamburgerDropdown/HamburgerDropdown';
import './Header.css';
import logo from './img/logo.png';
import search from './img/search_icon.png';
import notification from './img/notification.png';
import signIn from './img/photo.jpg';

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            switcher : false,
            css :	{
                visibility: "hidden" 
            },
            searchInput: ''
        }

        this.cssSwitch = this.cssSwitch.bind(this);
        this.toggle = this.toggle.bind(this);   
        this.handleInputChange = this.handleInputChange.bind(this); 
    };

    handleInputChange( event ){
        this.setState({
            searchInput: event.target.value,
        })
    }

 cssSwitch(value){
	if(value){
		 this.setState({css: 
			{visibility: "hidden", }
		})
		return this.state.css;
	}
	else if(value === false){
		 this.setState({css:
			{visibility: "visible",
			boxShadow: '12px 12px 6px rgba(0,0,0,.1)', 
			border: '.5px solid #bbb', 
			backgroundColor: '#fff', 
			color: '#444444',
			width: 280, 
			paddingTop:'0px', 
            position: 'fixed', 
            top: '57px',
			zIndex: '1700' }
		})
		return this.state.css;
    }
}
toggle(){
    this.setState({switcher : !this.state.switcher})
	return this.cssSwitch(this.state.switcher)
} 

render(){
    return(
        <section className="main_header_section">
            <div className="main_header_div">
                <ul id="menu_logo">
                    <li className="header_hamburger" onClick={()=>this.toggle()}>
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
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
                    <Link to = "/login">
                        <li id="sign_in">
                            <img src={ signIn }/>
                        </li>
                    </Link>
                </ul>
            </div>
            < MySideNav style={this.state.css} />
        </section>
    )
}

}

