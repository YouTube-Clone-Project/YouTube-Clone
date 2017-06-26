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
    }

    addComment : function(req,res){
      db.post_comment([req.body.pUrl, req.session.passport.user[0].id],function(err, response){
    if(!err){
      res.status(200).send(response);
      console.log(response);
    }else{
      res.send(err);
      console.log(err);
    }

  })
  }
};
