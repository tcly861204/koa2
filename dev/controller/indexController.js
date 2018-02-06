import indexModel from "../models/indexModels"
import _ from "../utils/mutils"
const indexController = {
  index(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      const data =await M.selected();
      await ctx.render("home/index",{rows:data});
    }
  },
  indexDate(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      ctx.body = {rows:await M.selected()};
    }
  }
}
export default indexController