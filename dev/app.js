import Koa from 'koa';
import path from 'path';
import session from 'koa-session';
import router from 'koa-simple-router';
import convert from 'koa-convert';
import ejs from 'ejs';
import koaStatic from 'koa-static';
import views from "koa-views";
import co from 'co';
import request from 'request';
import babelCore from 'babel-core/register';
import babelPolyFill from 'babel-polyfill';
import initController from "./controller/initController";
import CONFIG from './config/config';
import sessionConfig from './config/session_config';
let app = new Koa();

//配置静态资源
app.use(convert(koaStatic(CONFIG.get('staticDIR'))));

app.keys = ['some secret hurr'];
app.use(session(sessionConfig, app));

// 配置服务端模板渲染引擎中间件
app.use(views(CONFIG.get('viewsDIR'),{
  extension: 'ejs',
  map : {html:'ejs'}
}));

//配置路由
initController.init(app,router);

//处理页面错误
app.on("error",(err,ctx)=>{
  log.error('server error', err, ctx);
});

app.listen(CONFIG.get('port'));