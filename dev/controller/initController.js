import _index from './indexController';
const controllerInit = {
  init(app,router){
    app.use(router(_ =>{
      _.get('/',_index.index()),
      _.get('/index',_index.indexDate())
    }));
  }
}

export default controllerInit;