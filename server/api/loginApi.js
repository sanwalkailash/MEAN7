module.exports = function (app, port,environment,server,console,models) {
  var port = 6600;
const util = require("./Utility")(app, port,environment,server,console,models)
const tokenApi = require("./token")(app, port,environment,server,console,models)
  const appConstants = require('../AppConstants/Constants')
   const mongoose = require("mongoose")
    const fs = require('fs');

    return {
    login:function(req,res)        {
      console.info("login Invoked");
      try {
          let errors = [];
          if(util.isVoid(req.body.email)){
              errors.push("Email missing !");
          }

          if(util.isVoid(req.body.password)){
                        errors.push("Password missing !");
                    }
          if(errors.length>0){
              res.json({
                  "status":appConstants.failure,
                  "errors" : errors
              });
          }else {
               console.info("authonticating user")
               models.userSchema.findOne(
                  {
                    "email":req.body.email,
                    "password":req.body.password,
                    "appName":req.body.appName
                  }
                  )
                  .then(user => {
                      if(util.isVoid(user)){
                        errors.push("User-Password Not found !");
                        res.json({
                              "status":appConstants.failure,
                              "errors" : errors
                          });
                      }else {
                        tokenApi.generateAuthToken(req,res,user);
                      }
                  },
                  err => {
                      console.error(err)
                      errors.push(appConstants.serverError)
                      errors.push(err)
                      res.json({
                                "status":appConstants.failure,
                                "errors" : errors
                            });
                  })
          }
      }catch(e) {
          console.info("caught exception")
                 console.error(e);
                 res.json({
                   "status": appConstants.failure,
                   "message": e,
                   "errorcode": 500
                 });
               }
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



