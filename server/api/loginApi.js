module.exports = function (app, port,environment,server,console,models) {
  var port = 6600;
const util = require("./Utility")(app, port,environment,server,console,models)
  const appConstants = require('../AppConstants/Constants')
   const mongoose = require("mongoose")
    const fs = require('fs');

    return {
    login:function( req, res, next ) {
      var CryptoJS = require("crypto-js");
      console.log("sign-in callback function Invoked test");
      var request = require('request');
      var body = req.body;
      var username = body.username;
      var password = body.password;
      var portalName = body.portalName;
      var token;
      var refreshToken;
      var responseProfile;
      var loginURL = '';

      // Encrypt
      var secretKey = '>Zh.4j[iv]K7ph?';
      var hashedUserData = {};
      if ( username && password ) {
        hashedUserData = {
          email: CryptoJS.AES.encrypt(username, secretKey).toString(),
          password: CryptoJS.AES.encrypt(password, secretKey).toString()
        };
      }
      console.log("hashedUserData:: ", hashedUserData);

      function callback(error, response, body) {
        try {
          if(!error && response.statusCode == 200 ) {
            var responseData;
            responseData = body;
            if (responseData.status == 0) {
              console.log('the value for host in callback function-> ', host);

              token = responseData.response.token;
              refreshToken = responseData.response.refreshToken;

              loginData = responseData.response;
              res.json({
                "status": appConstants.success,
                "message": "",
                "auth_token": token,
                "loginData" : loginData,
                "secureUserData": hashedUserData,
                "refreshToken":refreshToken,
              });
            } else {
              res.json({
                "status": appConstants.failure,
                "message": "Invalid Username or Password",
                "errorcode": responseData.ecode
              });
            }

          } else {
            res.json({
              "status": appConstants.failure,
              "message": "Something went wrong",
              "errorcode": 500
            });
          }

        } catch(e){
          console.trace(e);
          res.json({
            "status":appConstants.failure,
            "message": e,
            "errorcode": 500
          });
        }
      }

      var jsonData  = { "username": username, "password": password, "appname" : "GeoAd" }
      if( !isVoid( portalName ) ) jsonData["portalName"] = portalName;

      loginURL = {
        url: protocol + host + ":" + self_port + "/bh/login/v1",
        method: 'post',
        json: jsonData, //{"username": username, "password": password, "appname" : "GeoAd" ,"portalName" : portalName},
        headers: {'Content-Type': 'application/json'}
      };
      console.log("Login Options", loginURL);

      request(loginURL, callback);
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



