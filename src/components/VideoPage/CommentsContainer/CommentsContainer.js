import React, { Component } from 'react';
import axios from 'axios';
import './CommentsContainer.css';
import bullet from './../../Header/img/bullet.png';
import userImg from './../../Header/img/photo.jpg';
import down_arrow from './../../Header/img/drop_down_arrow.png';

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
                
            ],
            clicked: false
        }
        this.handleCommentFilterChange = this.handleCommentFilterChange.bind(this);
       this.formatDate = this.formatDate.bind(this);
    }

   componentDidMount(){
        axios.get( '/api/comments/' + this.props.videoId )
        .then( res => {
            this.setState({
                comments: res.data
            })
        })
    }


    componentDidUpdate(prevProps, prevState){
        if ( this.props !== prevProps){
            axios.get( '/api/comments/' + this.props.videoId )
            .then( res => {
                this.setState({
                    comments: res.data
                })
            })
        }
    }

   formatDate(str){
        let timeAgo = new Date(str);
        return timeAgo
    }

    handleCommentFilterChange(){
        this.setState({
            clicked: !this.state.clicked
        });
            if(!this.state.clicked){
            document.getElementById('comment_filter').style.background = '#e9e9e9'; 
            } else if (this.state.clicked) {
                document.getElementById('comment_filter').style.background = '#f8f8f8';
            } else {
                document.getElementById('comment_filter').style.background = '#f8f8f8';
            }
    }

    render() {
        let filterBttn = null;
        if(this.state.clicked){
            filterBttn = <div id="filter_content">
                <p>Top Comments</p>
                <p>Newest First</p>
            </div>
        }
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
                    <div id="comment_filter" onClick={ this.handleCommentFilterChange }>
                        <p>Top Comments</p>
                        <div><img src={ down_arrow }/></div>
                    </div>
                    { filterBttn }
                {
                        this.state.comments.map( (comment, index) => {
                            return  <div key={index} className='individual_comment'>
                                            <div className='user_comment_thumbnail'></div>
                                            <ul id="user_info_comment">
                                                <li id="comment_user_name">{ comment.userid }</li>
                                                <li id="comment_posted">{ comment.comment_date }</li>
                                            </ul>
                                            <p id="comment_comment">{ comment.content }</p>
                                            
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


