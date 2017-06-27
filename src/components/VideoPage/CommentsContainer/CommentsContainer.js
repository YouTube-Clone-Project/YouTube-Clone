import React, { Component } from 'react';
import axios from 'axios';
import './CommentsContainer.css';
import bullet from './../../Header/img/bullet.png';
import userImg from './../../Header/img/photo.jpg';

class CommentsContainer extends Component {

    constructor(props){
        super(props);

       this.state = {
            comments: [
                {
                    username: '',
                    date: '',
                    text: ''
                },
                
            ]
        }

       this.formatDate = this.formatDate.bind(this);
    }

   componentDidMount(){
        axios.get('/api/comments')
        .then( res => {
            this.setState({
                comments: res.data
            })
        })
    }

   formatDate(str){
        let timeAgo = new Date(str);
        return timeAgo
    }

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
                    <div id="border_line">
                    </div>
                </div>
                <section className='all_comments'>
                {
                        this.state.comments.map( (comment, index) => {
                            return  <div key={index} className='individual_comment'>
                                            <div className='user_comment_thumbnail'></div>
                                            <ul id="user_info_comment">
                                                <li id="comment_user_name">loren</li>
                                                <li id="comment_posted">3 months ago</li>
                                            </ul>
                                            <p id="comment_comment">this video is the best video in the world!</p>
                                            
                                            <div className='comment_reply_box'>
                                                <ul id="reply_functions">
                                                    <li>Reply</li>
                                                    <li><img src={ bullet }/></li>
                                                    <li>0</li>
                                                    <li><div id="thumb_up"></div></li>
                                                    <li><div id="thumb_down"></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    
                        })
                    }
                    </section>

            </div>
        );
    }
}

export default CommentsContainer;


