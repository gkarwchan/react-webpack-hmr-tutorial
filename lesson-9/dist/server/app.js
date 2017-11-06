'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(path.resolve(process.cwd(), 'dist')));
var indexFile = path.join(__dirname, '../index.html');
app.get('/', function (req, res) {
    res.sendFile(indexFile);
});

exports.default = app;