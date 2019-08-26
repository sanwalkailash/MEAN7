module.exports = function (app, port,environment,server,console,models) {
const util = require("./Utility")(app, port,environment,server,console,models)
  const appConstants = require('../AppConstants/Constants')
   const mongoose = require("mongoose")

  return {
    generateAuthToken : function(req,res,user){
        console.info("@generateAuthToken..");
      try {
            var errors=[];
             console.info("Authorizing user by generating token.. ")
             new models.tokenSchema({"token":user.created_at+","+user.appName+","+user.email+","+user.password})
                 .save()
                 .then(token => {
                    res.json({
                           "status":appConstants.success,
                           "user":user,
                           "token":token.token
                       });
                 },
                 err => {
                     errors.push(appConstants.serverError)
                     errors.push(err)
                     res.json({
                               "status":appConstants.failure,
                               "errors" : errors
                           });
                 })
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
    authenticateToken(req,res,next){
      console.info("@authenticateToken token received [ ",req.headers.authorization," ]");
      try {
            var errors=[];
             if(util.isVoid(req.headers.authorization)){
                                     errors.push("Required authentication.")
                                 }
             if(errors.length>0){
                           res.json({
                               "status":appConstants.failure,
                               "errors" : errors,
                               "errorcode": 401
                           });
                           return;
                           }
             models.tokenSchema.find({"token":req.headers.authorization})
                 .then(token => {
                    if(util.isVoid(token)){
                        errors.push("Invlaid token.");
                        res.json({
                               "status":appConstants.failure,
                               "errors" : errors,
                               "errorcode": 401
                           });
                           return;
                    }else {
                        console.info("------####-----")
                        console.info("User Details");
                        console.info(util.decrypt(req.headers.authorization));
                        console.info("token log");
                        console.info(token);
                        console.info("------####-----")
                        if(util.tokenExpired(token)) {
                            errors.push("Token Expired.");
                            res.json({
                                "status": appConstants.failure,
                                "errors": errors,
                                "errorcode": 401
                            });
                        }else {
                            return next();
                        }
                    }
                 },
                 err => {
                     errors.push(appConstants.serverError)
                     errors.push(err)
                     res.json({
                               "status":appConstants.failure,
                               "errors" : errors
                           });
                     return next();
                 })

      }catch(e) {
          console.info("caught exception")
                 console.error(e);
                 res.json({
                   "status": appConstants.failure,
                   "message": e,
                   "errorcode": 401
                 });
                 return;
               }
    },
  }
};



