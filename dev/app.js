import Koa from 'koa';
import path from 'path';
import router from 'koa-simple-router';
import convert from 'koa-convert';
import koaStatic from 'koa-static';
import render from 'koa-swig';
import co from 'co';
import request from 'request';
import babelCore from 'babel-core/register';
import babelPolyFill from 'babel-polyfill';
import initController from "./controller/initController";
import CONFIG from './config/config';
let app = new Koa();

//静态文件配置
app.context.render = co.wrap(render({
  root: CONFIG.get('viewsDIR'),
  autoescape: true,
  cache: 'memory',
  ext: "swig",
  varControls: ['[[', ']]'],
  writeBody: false
}));
app.use(convert(koaStatic(CONFIG.get('staticDIR'))));

//配置路由
initController.init(app,router);

app.listen(CONFIG.get('port'));