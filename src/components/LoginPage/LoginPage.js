import './LoginPage.css';
var React = require('react');
var ReactDOM = require('react-dom');




var LoginPage = React.createClass({
  render: function(){
    return(
    <div className= "container">
      <div className="middleizer">
      <div className = "google">
      <h1><span className = "g">G</span><span className="o1">o</span><span className ="o2">o</span><span className="g2">g</span><span className="l">l</span><span className="e">e</span></h1>
      </div>
      <br/>
      <br/>
      <a href='/auth/google' rel="external">
      <div className = "googlebutton">
        <p className= "siwg">Sign In With Google</p>
      </div>
      </a>
      </div>
    </div>
    )
  }
})




export default LoginPage;