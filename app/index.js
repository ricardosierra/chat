"use strict"

const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer('app');
const io = require('socket.io')(server);
const allowCors = require('./config/cors');
const ip = require('ip');

// Descomente para Usar no Staging
// process.env.NODE_ENV = 'staging';
process.env.SENTRY_URL = 'https://7bdafae496f34d9fa52bf25d63c3c42e@sentry.io/1327252';

// config variables
const config = require('./config/config.js');

let today = new Date();

global.log.info('############################################################');
global.log.info('Hello World:', new Date().toJSON());
global.log.info("IP:" + ip.address());
global.log.info('System: ' + process.platform);
global.log.info('############################################################');


// Carrega Log
let dia = today.getDate();
let mes = today.getMonth() + 1;
let ano = today.getFullYear();
let logName = 'LOG_' + ano + mes + dia + '.log';
const SimpleNodeLogger = require('simple-node-logger');
global.log = SimpleNodeLogger.createSimpleLogger(
    {
        logFilePath: global.gConfig.LOG_PATH + logName,
        timestampFormat: 'DD-MM-YYYY HH:mm:ss.SSS'
    }
);


// Sentry
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_URL });

/**
 * Routes
 */

// Configurações do Servidor
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(allowCors);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));

app.engine('html', require('ejs').renderfile);
app.set('view.engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
});

/**
 * Socket
 */
io.on('connection', socket => {
    console.log("soquet conectado: ${socket.id}");
});

/**
 * Server
 */
server.listen(3000);