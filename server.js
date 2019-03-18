// Get dependencies
const log4js = require('log4js');
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override') // allow forms to send put and delete req.
const json = require('express-json')
const mongoose = require('mongoose');
const session = require('express-session');
//const flash = require('connect-flash');

const app = express();

// Parsers for POST data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


//configuring logger ----
// Configuration file defines three appenders that are children of the clustered appender.
// The clustered appender makes sure that only the master process writes to the log files
// Three log files are defined: log/app.log gets all the log messages and is configured to
// rotate everyday. log/errors.log uses the logLevelFilter to only get ERROR messages;
// log/access.log contains only the http request logs, using the connect-logger, and is configured to rotate every day.
log4js.configure(require("./server/resources/log4js.json"));
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
var console = log4js.getLogger('[access]');

// Point static path to dist
var port;
var server_detail = {};
console.info("ENV is ::", process.env.ENV);
if (!process.env.PORT) { console.info("PORT :: undefined, using defaults") }

var environment = process.env.ENV || 'development';
if (environment === 'production') {
    port = 8899;
    server_detail = {host:"api.host.me", self_port:7700, protocol:"http://", env:"production", mailerver_host : "mail.host.me", mailerver_host : "8062"}
} else if (environment === 'staging') {
    port = 8899;
    server_detail = {host:"api.host.me", self_port:7000, protocol:"http://", env:"staging", mailerver_host : "mail.host.me", mailerver_host : "8041"}
} else {
    port = 8899;
    server_detail = {host:"api.host.me", self_port:6600, protocol:"http://", env:"development", mailerver_host : "mail.host.me", mailerver_host : "8041"}
}

mongoose.Promise = global.Promise;
var connection = require('./configs/database')(mongoose);
var models = require('./models/models')(connection);

// load App routes.
// 1. travelline routes.
require('./server/routes/dashboard')(app, port,environment,server_detail,console,models); // load our routes and pass in our app and fully configured passport



/**
 * Get port from environment and store in Express.
 */

app.set('port', port);
app.set('view engine', 'html'); // set up html for templating
app.engine('html', require('ejs').__express);
// console.info(__dirname);
app.set('views', __dirname + '/dist');
app.use(express.static(path.join(__dirname, '/dist')));
console.info("Static path ", path.join(__dirname, '/dist'));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(json);
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // for allowing cross origin calls
app.set('trust proxy', 1) // trust first proxy
app.use(session({
          secret: 'keyboard cat',
          resave: false,
          saveUninitialized: true,
          cookie: { secure: true }
        }));// persistent login sessions

// Global variable for rest errors
//app.use((req,res,next)=>{
//res.locals.success_msg = req.flash('success_msg')
//res.locals.error_msg = req.flash('error_msg')
//res.locals.error = req.flash('error')
//});

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () { console.info('Server running on localhost', port) });

