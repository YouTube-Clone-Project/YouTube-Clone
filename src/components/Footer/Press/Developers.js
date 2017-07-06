import React, { Component } from 'react';

export default class DevelopersPage extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <img src={require('./pressImg/developers.jpg')}
                alt={''}
                style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}