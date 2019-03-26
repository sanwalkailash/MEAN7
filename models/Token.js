const mongoose = require('mongoose');
const moment = require('moment');
const appConstants = require('../server/AppConstants/Constants')
const util = require("../server/api/Utility")()

module.exports = function (connection) {

    const Schema = mongoose.Schema;

    const TokenSchema = new Schema({
        token: {type: String},
        created_at: {type: Date, required: true, default: moment()}
    });


    TokenSchema.pre('save', function (next) {
        this.token = util.encrypt(this.token + "," + moment())
        console.info("generated token...", this.token)
        next();
    })

    TokenSchema.methods.expired = function (token) {
        return (moment().diff(token.created_at, 'seconds')) > appConstants.AppProperties.tokenLife;
    };

    const token = connection.model('tokens', TokenSchema);

    return token;
}
