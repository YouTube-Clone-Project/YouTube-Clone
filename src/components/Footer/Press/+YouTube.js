import React, { Component } from 'react';



export default class plusYTPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.body.scrollTop = 0;
    }
    
    render() {
        return (
            <img src={require('./pressImg/plusYT.jpg')}
                style={{ width: '100%', height: 'null', zIndex:'1000' }}>
            </img>
        )
    }
}


