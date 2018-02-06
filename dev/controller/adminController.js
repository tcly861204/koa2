const adminController = {
  isSession(ctx,str){
    if(ctx.session[str]){
      return true;
    }else{
      ctx.redirect('/admin/login');
      return false;
    }
  },
  index:async(ctx,next)=>{
    await ctx.render('admin/index',{title:"后台管理首页"});
  },
  login(){
    return async(ctx,next)=>{
      await ctx.render("admin/login",{title:"登录"});
    }
  }
}
export default adminController