const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14) //this is 14 days
    }
}))

app.use(passport.initialize());
app.use(passport.session());

var conn = massive.connectSync({
  connectionString: config.connectionString
})


app.use(express.static(__dirname + './../build'))
app.set('db',conn);
var db = app.get('db');

var userController = require("./userController.js");

/////////////Oauth functions

passport.use(new GoogleStrategy({
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
  },
  userController.findById

));
passport.serializeUser(function(user,done){
  console.log('serializing',user);
  done(null,user);
});
passport.deserializeUser(function(id,done){
  db.find_by_id([id],function(err,user){
    done(err,user);
  });
});

///////Oauth endpoints
app.get('/getuserinfo',userController.getUserInfo);

app.get('/logout',function(req,res){
  req.session.destroy(function(err,data){
  });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/calendar'] }));

app.get('/auth/callback', passport.authenticate('google', { failureRedirect: '/LoginPage' }), function (req, res) {
    res.redirect('/');
});

//////////Other endpoints for the front end
app.get('/api/comments/:videoId', userController.getCommentsByVideo);
app.get('/api/checkForSubscriptions/:channelname', userController.checkForSubscriptions)
app.get('/api/subscriptions', userController.getUserSubscriptions);
app.post('/api/comments/:videoId', userController.postCommentToVideo);
app.post('/api/subscribe/:channelName', userController.subscribeToChannel);

app.delete('/api/unsubscribe/:channelName', userController.unsubscribeToChannel)

app.listen(config.port,console.log("you are now connected on 3000, database should work too"));
