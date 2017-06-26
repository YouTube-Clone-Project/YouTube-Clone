import React, { Component } from 'react';

import './CommentsContainer.css';
import bullet from './../../Header/img/bullet.png'
import userImg from './../../Header/img/photo.jpg'

class CommentsContainer extends Component {

    render() {
        return (
            <div className='comments_wrapper'>
                <div className='comments_container'>
                    <ul>
                        <li>COMMENTS</li>
                        <li><img src={ bullet }/></li> 
                        <li>0</li>
                    </ul>
                    <div id="user_img">
                        <img src={ userImg }/>
                    </div>
                    <div id="comment_input_tick">
                        <div id="comment_input_tick_inner">
                        </div>
                    </div>
                    <div id="comment_input">
                        <input placeholder="Add a public comment..."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentsContainer;


