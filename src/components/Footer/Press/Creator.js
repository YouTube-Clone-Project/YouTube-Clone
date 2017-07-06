import React, { Component } from 'react';

export default class CreatorPage extends Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <img src={require('./pressImg/creator.jpg')}
                alt={''}
                style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}
