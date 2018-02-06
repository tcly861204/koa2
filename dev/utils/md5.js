import crypto from "crypto";
export default function(str){
  let obj = crypto.createHash("md5");
  obj.update(str);
  return obj.digest('hex');
}