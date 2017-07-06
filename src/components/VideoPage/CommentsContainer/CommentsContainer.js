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
            userInput: '',
            clicked: false,
            reportClicked: false,
            likeCount: 0,
        }

        this.formatDate = this.formatDate.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.postUserComment = this.postUserComment.bind(this);
        this.handleCommentFilterChange = this.handleCommentFilterChange.bind(this);
        this.handleReportClick = this.handleReportClick.bind(this)
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
        if ( this.props !== prevProps ){
            axios.get( '/api/comments/' + this.props.videoId )
            .then( res => {
                this.setState({
                    comments: res.data
                })
            })
        }
    }

    handleUserInputChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    postUserComment(e){
        e.preventDefault();
        axios.post( '/api/comments/' + this.props.videoId, {
            "text": this.state.userInput
        })
        .then( () => {
            axios.get( '/api/comments/' + this.props.videoId )
            .then( res => {
                this.setState({
                    comments: res.data,
                    userInput: ''
                })
            })
        })
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

    handleReportClick(){
        this.setState({
            reportClicked: !this.state.reportClicked
        });
    }

    handleLike(){
        this.setState({
            likeCount: this.state.likeCount + 1
        })
    }
    handleDislike(){
        let count = 0;
        count++
    }
    render() {
        let filterBttn = null;
        if(this.state.clicked){
            filterBttn = <div id="filter_content">
                <p>Top Comments</p>
                <p>Newest First</p>
            </div>
        }
        let reportBttn = null;
        if(this.state.reportClicked){
            reportBttn = <div id="report_content">
                    <p>Report spam or abuse</p>
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
                        <form onSubmit={ this.postUserComment }>
                            <input 
                            placeholder="Add a public comment..."
                            onChange={ this.handleUserInputChange }
                            value={ this.state.userInput }
                            />
                        </form>
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
                                        <li id="comment_user_name">{ comment.firstname }</li>
                                        <li id="comment_posted">{ comment.vid_date }</li>
                                    </ul>
                                    <p id="comment_comment">{ comment.content }</p>
                                            
                                            <div className='comment_reply_box'>
                                                <ul id="reply_functions">
                                                    <li>Reply</li>
                                                    <li><img src={ bullet }/></li>
                                                    <li>{ this.state.likeCount }</li>
                                                    <li onClick={ this.handleLike }><div id="thumb_up"></div></li>
                                                    <li onClick={ this.handleDislike }><div id="thumb_down"></div></li>
                                                </ul>
                                            </div>
                                            <div id="report_bttn" >
                                                <div id="report_bttn_img" onClick={ this.handleReportClick }></div>
                                            </div>
                                            {reportBttn}
                                        </div>
                                    
                        })
                    }
                    </section>

            </div>
        );
    }
}

export default CommentsContainer;
