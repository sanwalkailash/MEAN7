/**
 * \
 *
 * Created by kailash on 14/1/19.
 */
module.exports = function () {
    // json format :"appname":{app details}
    var production_port = ":80";
    var dev_port = ":8056";
    var appDetails = {
        "test_travelline": {
            "appKey": "test@travelline",
            "sso": {
                "abccompany": {
                    "method": "post",
                    "url": "/abccompany/ideas" // api path must  include slash in the begining.
                }
            },
            "appname": "travelline Portal",
            "theme": {
                "navbar": {
                    "bgColor": "#f08521",
                    "logo": "/assets/images/cd_logo.png",
                    "defaultUserLogo": "/assets/images/default.png"
                },
                "footer": {
                    "backgroundColor": "white",
                    "backgroundColorLogin": "#f08521",
                    "color": "black",
                    "colorLogin": "white",
                    "fontSize": "11px"
                },
                "loginForm": {
                    "header": {
                        "backgroundColor": "#fff",
                        "color": "black",
                        "fontSize": "11px"
                    },
                    "input": {
                        "borderBottom": "1px solid #bebebe"
                    },
                    "button": "#f08521"
                }
            },
            "contact": {
                        "toEmail": "support@pahadi.me",
                        "cc": ""
                      }
        },
    }

    var routeData = {
        'test_travelline': {
            "home": {
                "colors": { "label": "div1", "color": "grey" },
            },
            "login": {
                "colors": { "label": "div1", "color": "grey" },
            }
        },
        'uplive': {
                    "home": {
                        "colors": { "label": "div1", "color": "grey" },
                    },
                    "login": {
                        "colors": { "label": "div1", "color": "grey" },
                    }
                },

    };
    var routePath = {
        'test_travelline': routeData.uptest,
        'uplive': routeData.uplive,
    };
    return {
        appDetails: appDetails,
        routeConfig: routePath
    }
}
