"use strict";

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./make-webpack-config')('dev');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

// -------------------proxy----------------------

var app = express();
// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


// ----------------webpack-dev-server------------------

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});

// run the two servers
server.listen(8081, "localhost", function() {});
app.listen(8080);