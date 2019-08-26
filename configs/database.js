const appConstants = require('../backend/AppConstants/Constants')
module.exports = function(mongoose) {
    console.log("@database config..",appConstants)
    var dbURI = appConstants.AppProperties.database;
    var connection = mongoose.createConnection(dbURI,{
                 useNewUrlParser: true,
                   useCreateIndex: true,
                   useFindAndModify: false,
                   autoIndex: false, // Don't build indexes
                   reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
                   reconnectInterval: 500, // Reconnect every 500ms
                   poolSize: 10, // Maintain up to 10 socket connections
                   // If not connected, return errors immediately rather than waiting for reconnect
                   bufferMaxEntries: 0,
                   connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
                   socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
                   family: 4 // Use IPv4, skip trying IPv6
     });

    // When successfully connected
    connection.on('connected', function () {
        console.info('Mongoose connection open to ' + dbURI);
    });

    // If the connection throws an error
    connection.on('error',function (err) {
        console.info('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return connection;
}
