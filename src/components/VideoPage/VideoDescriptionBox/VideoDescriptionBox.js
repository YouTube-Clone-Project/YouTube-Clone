import React, { Component } from 'react';

import './VideoDescriptionBox.css';

class VideoDescriptionBox extends Component {

    formattedDate(dateStr){
        let dateObj = new Date(dateStr);
        let month = dateObj.getMonth();
        let year = dateObj.getFullYear();
        let day = dateObj.getDay();
        switch (month){
            case 1:
                month = 'Jan';
                break;
            case 2:
                month = 'Feb';
                break;
            case 3:
                month = 'Mar';
                break;
            case 4:
                month = 'Apr';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'Aug';
                break;
            case 9:
                month = 'Sept';
                break;
            case 10:
                month = 'Oct';
                break;
            case 11:
                month = 'Nov';
                break;
            case 12:
                month = 'Dec';
                break;
            default: 
                return ' '
        }
        return `${month} ${day}, ${year}`;
    }

    render() {
        let {
            snippet
        }=this.props
        return (
            <div className='video_description_wrapper'>
                <div className='video_description_container'>
                    <p id='publish_date'>Published on { this.formattedDate(snippet.publishedAt) }</p>
                    <p id='video_description'>{ snippet.description }</p>
                    <div className='show_more_box'>
                        <div className='line'></div>
                        <p id='show_more_words'>SHOW MORE</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDescriptionBox;