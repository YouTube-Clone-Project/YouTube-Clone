import React, { Component } from 'react';

export default class DevelopersPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.body.scrollTop = 0;
    }
    
    render() {
        return (
            <img id='bkgrnd' src={require('./pressImg/developers.jpg')}
                style={{ width: '100%', height: 'null' }}>
            </img>
        )
    }
}