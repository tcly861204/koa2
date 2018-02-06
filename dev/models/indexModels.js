import Client from "../middleware/conn";
class indexModel{
  constructor(ctx){
    this.ctx = ctx;
  }
  selected(){
    const M = new Client();
    return new Promise((res,rej)=>{
      M.query("select * from db_admin;").then(function(result){
        if(result){
          res(JSON.parse(JSON.stringify(result)));
        }
      });
    });
  }
}
export default indexModel;