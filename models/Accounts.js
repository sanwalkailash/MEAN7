const mongoose = require('mongoose');
const moment = require('moment');

module.exports = function (connection) {

    const Schema = mongoose.Schema;

    const accountSchema = new Schema({
        appName: {type: String},
        email: {type: String},
        role: {type: String},
        accountUid: {type: String}, // this is user _id account owner.
        company: {type: String},
        created_at: {type: Date, required: true, default: moment()},
        updated_at: {type: Date, default: moment()}
    });

    const account = connection.model('accounts', accountSchema);

    return account;
}
