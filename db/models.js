module.exports = function (connection) {

    return {
        userSchema: require('./User')(connection),
        tokenSchema: require('./Token')(connection),
        accountSchema: require('./Accounts')(connection),
    }
}
