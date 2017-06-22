import React, { Component } from 'react';

import './RecommendedVideosContainer.css';

class RecommendedVideosContainer extends Component {

    render() {
        return (
            <div className='more_videos_placeholder'>
                
            </div>
        );
    }
}

export default RecommendedVideosContainer;


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${ this.props.search }&type=video&key=AIzaSyCuuFUnpR3Gm-ai-tS252apbm0adv10PAI
