module.exports = {
    entry: "./Class.js",
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
							  test: /\.js$/,
								loader: "babel-loader",
								exclude: /node_modules/
						}
        ]
    }
};
