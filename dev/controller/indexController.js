const indexController = {
  index(){
    return async(ctx,next)=>{
      ctx.body = await ctx.render('index.swig',{
        title:"个人博客"
      });
    }
  }
}
export default indexController