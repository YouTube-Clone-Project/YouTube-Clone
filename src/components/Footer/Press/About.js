import React, { Component } from 'react';

export default class AboutPage extends Component {

    render() {
        window.scrollTo(0, 0)
        return (
            <div style={{ top: '-696', height: '3625', position: 'relative',  padding: '0', margin: '0'}}>
                <div style={{top: '950', width: '60%', height: 'null', left: '280px', position: 'relative', padding: '0', margin: '0', zIndex: '1100'}}>
                    <video autoPlay loop src={require('./pressVid/about.mp4')} style={{width: '100%', }}></video>
                </div>; 
                <div style={{zIndex:'500', position: 'relative'}}>    
                    <img src={require('./pressImg/about.jpg')}
                        alt={''}
                        style={{ width: '100%', height: '100%', padding: '0', margin: '0' }}>
                    </img>
                </div>
            </div>  
        )
    }
}