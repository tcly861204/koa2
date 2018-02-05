import Client from "mysql-pro";
import CONFIG from '../config/config';
class Conn{
  constructor(){
    this.client = new Client({
      mysql:{
        host: CONFIG.get("host"),
        user: CONFIG.get("user"),
        password: CONFIG.get("password"),
        port: CONFIG.get("dbPort"),
        database: CONFIG.get("database")
      }
    });
  }
  query(sql){
    return new Promise((res,rej)=>{
      this.client.query(sql).then(function(result) {
        res(result);
      }, function(error){
        rej(error); 
      });
    });
  }
}
export default Conn;