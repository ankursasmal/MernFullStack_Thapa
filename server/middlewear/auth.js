let jwt=require('jsonwebtoken');
 let userInfo=require('../model/userInf.js')

let auth=async(req,res,next)=>{
try{
    let tokonFromCookie=req.cookies.jwt;
      let jwtVerify = jwt.verify(tokonFromCookie,process.env.SECRET_KEY);
 
    let user= await userInfo.findOne({_id:jwtVerify._id,"tokons.tokon":tokonFromCookie})
    if(!user){
        throw new Error('user not found')
    }
     req.tokon=tokonFromCookie;
    req.user=user;
    req.userId=user._id;

    next();
}
catch(e){
res.send('unauthorize tokon');
}


}
module.exports=auth