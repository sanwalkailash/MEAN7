//const express = require('express');
//const router = express.Router()
module.exports = function(router, port,environment,server,console,models) {

    console.info("travelline App route Initialized")
    const util = require("../api/Utility")(router, port,environment,server,console,models)
    const loginApi = require('../api/loginApi')(router, port,environment,server,console,models);
    const tokenApi = require('../api/token')(router, port,environment,server,console,models);

    // login api
    router.post('/login/v1', loginApi.login);
    router.post('/register/v1', loginApi.register);
    router.post('/user/update/v1', loginApi.updateProfile);
    router.post('/refresh/v1', loginApi.refresh);
    router.get('/user/v1/:email', loginApi.fetchUser);
    router.get('/user/v1/', loginApi.fetchUser);
    // api route setting ends ---

    // ui routes setting --
    router.get('/', function (req, res) {
        var user = {
            agent: req.header('user-agent'), // User Agent we get from headers
            host:req.header('host'),
            referrer: req.header('referrer'), //  Likewise for referrer
            ip: req.header('x-forwarded-for') || req.connection.remoteAddress, // Get IP - allow for proxy
            screen: { // Get screen info that we passed in url post data
              width: req.param('width'),
              height: req.param('height')
            }
          }
          console.info("from / client details are [",user,"]");
          res.render('index');
    })

    router.get('/api/config', function (req, res) {
        try {
            var config = require("../../configs/configurations")();
            var appHost = req.headers.host.split(':')[0];
            if (appHost != "localhost") {
                appHost = req.headers.host.split('.')[0];
            } else {
                console.info("No host found, setting default host--uptest")
                appHost = "test_travelline";
            }
            var localeVocab = ""
            console.info("req.headers.locale -- ", req.headers.locale)
            if (req.headers.locale) {
                localeVocab = require("./../resources/" + req.headers.locale + ".json")
            } else {
                localeVocab = require("../resources/en.json.js")
            }
            console.info("host is :: ", appHost);
            var appData = config.appDetails[appHost];
            console.info('config', appData);
            console.info('vocab', localeVocab)
            res.send({ "vocab": localeVocab, "config": appData });
            // res.sendStatus(200);
        } catch (e) {
            console.info(e);
            res.sendStatus(500);
        }
    });

    // ui route setting ends ---
    router.get('/getrouteconfigs/:route', function (req, res, next) {
            console.info("/getrouteconfigs/");
            var route = req.params.route;
            console.info("current route is", route);
            var config = require("../../configs/configurations")();
            var appHost = req.headers.host.split(':')[0];
            if (appHost != "localhost") {
                appHost = req.headers.host.split('.')[0];
            }
            console.info("host is :: ", appHost);
            var appData = config.routeConfig[appHost];
            console.info('config', appData);
            if(appData){
                res.send({ "routeconfig": appData});
            }else {
                console.info("route confix is not defined for route ["+route+"]")
                res.send({ "routeconfig": {}});
            }
        }
    );


    function validateApiForAuthToken(req,res,next) {
        if (Utility.isVoid(req.headers.Authorization)) {
            console.info("401 Not Authorized");
            res.send(401, {"status":401, 'message': 'Route UnAuthorized: token is missing in header.'});
            return;
        }else {
            return next();
        }
    }

}
