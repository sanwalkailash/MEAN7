module.exports = Object.freeze({
  "AppProperties":{
    "appName":"remittance",
    "database":process.env.NODE_ENV=='production'?"mongodb+srv://demo:demo@cluster0-uemxs.mongodb.net/test?retryWrites=true":"mongodb://127.0.0.1:27017/remittance",
    "secret":"QwErt!2#4",
    "profileFolder":"uploads/profile/"
  },
  "success":1,
  "failure":0,
  "user":{
      "appName": "",
      "name": "",
      "email": "",
      "dob": "",
      "contact": "",
      "password": "",
      "resume": {
          "name":"",
          "size":"",
          "type":"",
          "lastModifiedDate":"",
          "result":""
      },
      "token": "",
      "remember": ""
  },
  "serverError":"Server Error, Please try again !"
});
