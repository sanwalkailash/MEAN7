module.exports = function (connection) {

    return {
        accountSchema: require('./Accounts')(connection),
    }
}
