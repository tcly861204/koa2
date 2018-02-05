import crypto from "crypto";
export default {
  md5:function(str){
    let obj = crypto.createHash("md5");
    obj.update(str);
    return obj.digest('hex');
  }
}