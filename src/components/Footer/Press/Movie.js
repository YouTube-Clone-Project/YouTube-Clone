import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

export default class MoviePage extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <img src={require('./pressImg/movie.jpg')}
                alt={''}
               style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}


