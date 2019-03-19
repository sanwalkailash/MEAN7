module.exports = function (app, port,environment,server,console,models) {
  var port = 6600;
const util = require("./Utility")(app, port,environment,server,console,models)
  const appConstants = require('../AppConstants/Constants')
   const mongoose = require("mongoose")
    const fs = require('fs');

    return {
    login:function( req, res, next ) {
    },
    logout: function(req,res){
      req.user.token = null;
      req.user.save(function(err,user){
        if (err){
          res.send(500, {'message': err});
        }
        res.json({ message: 'See you!'});
      });
    },
    refresh: function (req, res) {
      console.info("Here in refresh", req.body);
      res.json({"status": appConstants.success, data: req.body});
    }

  }
};



