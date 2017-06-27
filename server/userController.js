var app = require('./index.js');
var db = app.get('db');

module.exports = {
  getUserInfo: function(req, res){
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
  }
};
