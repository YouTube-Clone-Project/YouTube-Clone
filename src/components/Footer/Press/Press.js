import React, { Component } from 'react';

export default class PressPage extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <img src={require('./pressImg/bkgrnd.jpg')}
                style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}
