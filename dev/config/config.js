import path from "path";
const CONFIG = new Map();

CONFIG.set("port",3000);
CONFIG.set("staticDIR",path.join(__dirname,"..","public"));
CONFIG.set("viewsDIR",path.join(__dirname,"..","views"));

//数据库配置
CONFIG.set("host","localhost");
CONFIG.set("user","root");
CONFIG.set("dbPort",3306);
CONFIG.set("password","");
CONFIG.set("database","dbcms");

export default CONFIG;