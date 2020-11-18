const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname + '/build');
const APP_DIR = path.resolve(__dirname + '/app');

let config = {
    "entry": `${APP_DIR}/index.js`,
    "output": {
        "path": `${BUILD_DIR}`,
        "filename": "bundle.js",
        "public_path": '/'
    },
    "module": {
        "loaders": [
            {
                "test": /\.jsx?/ ,
                "include": APP_DIR,
                "loader": "babel",
                "query": {
                    "presets": ["es2015", "react"]
                }
            }
        ]
    }
}
module.exports = config;
