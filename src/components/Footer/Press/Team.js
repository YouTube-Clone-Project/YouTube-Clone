import React, { Component } from 'react';

export default class TeamPage extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <img src={require('./pressImg/team.jpg')}
                style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}