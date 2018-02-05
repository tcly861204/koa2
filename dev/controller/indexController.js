import indexModel from "../models/indexModels"
import md5 from "../utils/md5"
const indexController = {
  index(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      const data =await M.selected();
      await ctx.render("index",{rows:data});
    }
  },
  indexDate(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      ctx.body = await M.selected();
    }
  }
}
export default indexController