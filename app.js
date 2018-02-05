'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

//静态文件配置
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.get('viewsDIR'),
  autoescape: true,
  cache: 'memory',
  ext: "swig",
  varControls: ['[[', ']]'],
  writeBody: false
}));
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDIR'))));

//配置路由
_initController2.default.init(app, _koaSimpleRouter2.default);

app.listen(_config2.default.get('port'));