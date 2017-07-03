var app = require('./index.js');
var db = app.get('db');

module.exports = {
  getUserInfo: function(req, res){
      console.log("get user info running");
    db.find_by_id([req.session.passport.user.google_id],function(err,user){
      if (err){
        res.status(400).json(err);
      }else if (user[0]){
        res.status(200).json(user[0]);
      }else if (user){
        res.status(200).json(user);
      }
    });
  },

  getCommentsByVideo: function (req, res, next){
    let videoId = req.params.videoId;
    db.getCommentsByVideo([videoId], function(err, comments){
      return res.status(200).json(comments);
    })
  },

  postCommentToVideo: function (req, res, next){
    let videoId = req.params.videoId;
    let commentText = req.body.text;
    let date = new Date();
    let userId = req.session.passport.user[0].id;
    if (videoId && commentText && userId){
      db.postCommentToVideo([commentText, userId, videoId, date], function(err, response){
        if(!err){
          res.status(200).json(response);
        }else{
          res.json(err);
        }
      })
    }else{
      res.status(200).send('must be logged in to comment');
    }
  },

  subscribeToChannel: function (req, res, next){
    let channelName = req.params.channelName;
    let userId = req.session.passport.user[0].id;
    db.subscribeToChannel([channelName, userId], function(err, response){
      return res.status(200).send('subscribed');
    })
  },

  unsubscribeToChannel: function(req, res, next){
    let channelName = req.params.channelName;
    let userId = req.session.passport.user[0].id;
    db.unsubscribeToChannel([channelName, userId], function(err, response){
      return res.status(200).send('unsubscribed')
    })
  },

  getUserSubscriptions: function (req, res, next){
    let userId = req.session.passport.user[0].id;
    if (userId){
      db.getUserSubscriptions([userId], function(err, response){
        return res.status(200).json(response);
      })
    }else{
      res.status(200).send('must be logged in to see subscriptions');
    }

  },

  checkForSubscriptions: function(req, res, next){
    let channelName = req.params.channelname;
    let userId = req.session.passport.user[0].id;
    // console.log(channelName)
    db.checkForSubscriptions([channelName, userId], function(err, response){
      return res.status(200).json(response)
    })
  },
    
  findById: function(accessToken,refreshToken,profile, done){
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
  
};
