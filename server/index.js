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
  function(accessToken,refreshToken,profile, done){
      db.find_by_id([profile.id],function(err,user){

          if(!user[0]){//if there isnt one, create!!
            console.log('CREATING USER');
            console.log('profile');
            db.create_google_user([profile.id,profile.name.familyName, profile.name.givenName, accessToken],function(err,user){
              console.log('USER CREATED',user);
              return done(err,user);//goes to serialize user
            })
          }else{//if we find a user, return it
            console.log('FOUND USER', user)
            return done(err,user);
          }

      })

  }

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

app.get('/auth/callback', passport.authenticate('google', { failureRedirect: '/#/' }), function (req, res) {
    res.redirect('/#/');
});

//////////Other endpoints for the front end
app.get('/api/comments/:videoId', userController.getCommentsByVideo);

app.listen(3000,console.log("you are now connected on 3000, database should work too"));
