"use strict";
exports.__esModule = true;
var os = require("os");
var express = require('express');
var app = express();
var port = 4200;
app.use('/', express.static('dist/web-entwicklung-angular-express/'));
app.use('/home', express.static('dist/web-entwicklung-angular-express/'));
app.listen(port, function () {
    console.log('app started');
});
app.get('/stats', function (request, response) {
    response.status(200).json({
        'hostname': os.hostname(),
        'cpus': os.cpus(),
        'uptime': process.uptime(),
        'total memory': os.totalmem()
    });
});
