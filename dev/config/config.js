import path from "path";
const CONFIG = new Map();
CONFIG.set("port",3000);
CONFIG.set("staticDIR",path.join(__dirname,"..","public"));
CONFIG.set("viewsDIR",path.join(__dirname,"..","views"));
export default CONFIG;