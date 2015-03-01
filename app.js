var express = require('express');
var app = express();
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

app.get('/', function (req, res) {
    res.send('<script src="bundle.js"></script>');
});

var compiler = webpack({
    entry: './Class.js',
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [{  
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    }
});

app.use(webpackDevMiddleware(compiler));

app.use(express.static(__dirname + '/static'));

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});
