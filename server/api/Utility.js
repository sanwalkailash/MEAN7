const appConstants = require('../AppConstants/Constants')
const CryptoJS = require('crypto-js');
const fs = require('fs');
const moment = require('moment');
module.exports = function (app, port,environment,server,console,models) {

    return{
        isVoid:function(obj){
            switch(typeof(obj)){
              case "undefined":
              case "object":
                for(var x in obj){
                  if(obj.hasOwnProperty(x))
                    return false;
                  else
                    return true;
                }
                return true;
              case "number":
              case "boolean":
                return false;
                break;
              case "string":
                if(obj == "")
                  return true;
                else
                  return false;
              default:
                return false;
            }
          },
          getClientIp : function(req,res,next) {
          console.info("@getClientIp...")
           var ipAddress;
           // The request may be forwarded from local web server.
           var forwardedIpsStr = req.header('x-forwarded-for');
           if (forwardedIpsStr) {
             // 'x-forwarded-for' header may return multiple IP addresses in
             // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
             // the first one
             var forwardedIps = forwardedIpsStr.split(',');
             ipAddress = forwardedIps[0];
           }
           if (!ipAddress) {
             // If request was not forwarded
             ipAddress = req.connection.remoteAddress;
           }
           console.info("client ip is -- ",ipAddress)
           next()
        },
        encrypt: function(word) {
         	 var ciphertext = CryptoJS.AES.encrypt(word, appConstants.AppProperties.secret);
         	 return ciphertext.toString();
         },
        decrypt: function(word){
            var decrypt = CryptoJS.AES.decrypt(word, appConstants.AppProperties.secret);
            return CryptoJS.enc.Utf8.stringify(decrypt).toString();
        },
        mkdirIfNotExist : function(dir){
            console.info("@mkdirIfNotExist, create dir if not exist.", dir);
            fs.promises.mkdir(dir, { recursive: true }).catch(error => { console.error('@mkdirIfNotExist caught exception : ', error.message); });
        },
        saveFile:function(dir,filename,content){
            fs.promises.mkdir(dir, { recursive: true })
                .then(result => { console.info("dir check done.") })
                .catch(error => { console.error('caught exception : ', error.message); throw error });
            let base64Data = content.split(';base64,').pop();
            console.info("base64Data",base64Data);
            fs.writeFile(dir+filename, base64Data,{encoding: 'base64'}, function (err) {
                if (err) throw err;
                console.info('file saved!');
            });
        },
        tokenExpired: function (token) {
            console.info("session time :: ",(moment().diff(token.created_at, 'seconds')))
            return (moment().diff(token.created_at, 'seconds')) > appConstants.AppProperties.tokenLife;
        }
    }
}