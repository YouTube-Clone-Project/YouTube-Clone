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
  }
};
