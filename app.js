'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

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

//配置静态资源
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDIR'))));

// 配置服务端模板渲染引擎中间件
app.use((0, _koaViews2.default)(_config2.default.get('viewsDIR'), {
  extension: 'ejs',
  map: { html: 'ejs' }
}));

//配置路由
_initController2.default.init(app, _koaSimpleRouter2.default);

//处理页面错误
app.on("error", function (err, ctx) {
  console.log(err);
  log.error('server error', err, ctx);
});

app.listen(_config2.default.get('port'));