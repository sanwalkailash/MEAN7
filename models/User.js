const mongoose = require('mongoose');
const moment = require('moment');
const appConstants = require('../server/AppConstants/Constants')
const util = require("../server/api/Utility")()

module.exports = function (connection) {

    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        appName: {type: String},
        name: {type: String},
        email: {type: String},
        dob: {type: String},
        contact: {type: String},
        password: {type: String},
        photo: {
            "name":{type: String},
            "size":{type: String},
            "type":{type: String},
            "lastModifiedDate":{type: String},
            "result":{type: String}
        },
        token: {type: String},
        created_at: {type: Date, required: true, default: moment()},
        updated_at: {type: Date, required: true, default: moment()}
    });

    UserSchema.pre("save", function (next) {
        this.token = util.encrypt(this.appName + "," + this.email + "," + this.password);
        console.info("@user schema default token..", this.token)
        next()
    })

    UserSchema.pre("update", function (next) {
        this.token = this.appName + "," + this.email + "," + this.password;
        console.info("@user schema default token..", this.token)
        next()
    })


    const User = connection.model('users', UserSchema);

    return User;
}
