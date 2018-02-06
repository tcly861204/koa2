//网站前台
import _index from './indexController';


//网站后台
import _admin from './adminController';


const controllerInit = {
  init(app,router){
    app.use(router(_ =>{
      //前台路由
      _.get('/',_index.index()),
      _.get('/index',_index.indexDate())

      //后台路由
      _.get('/admin',(ctx,next)=>{
        if(_admin.isSession(ctx,'user')){
          return _admin.index(ctx,next);
        }
      }),
      _.get('/admin/login',_admin.login()),
      _.get('/admin/login?action=login',(ctx,next)=>{
        console.log(ctx);
      })
    }));
  }
}

export default controllerInit;