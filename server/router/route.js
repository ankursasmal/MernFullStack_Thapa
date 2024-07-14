let express=require('express');
let jwt=require('jsonwebtoken')
let cookeParser=require('cookie-parser')
 let auth=require('../middlewear/auth.js')
let userInfo=require('../model/userInf.js');
 let route=express.Router();
 let bcript=require('bcryptjs')


require('../db/conn.js')
// use as middle  wear
route.use(cookeParser())
 
route.get('/' ,(req,res)=>{
    res.send('hello')
})
  
 

// frontened to or react all froten then not req get req becase post a sakhana navroute a chang hoa jaba
// route.get('/signIn',(req,res)=>{
//     res.send('hello3')
// })
route.post('/signIn',async(req,res)=>{
    try{
        let {email,password}=req.body;
          if( !email || !password ){
            return res.status(400).json({error:'pls fill all field'});
        }
         let userLogin=await userInfo.findOne({email:email});

         // jwt and cookie
let tokon= await userLogin.Genertetokon();
 res.cookie('jwt',tokon,{
    expires:new Date(Date.now()+253950055000),
    httpOnly:true
})
            let isMatch=await bcript.compare(password,userLogin.password);
          if(isMatch){
            res.status(200).json({message:'succesfuly signIn'})
        }
        else{
            res.status(400).json({message:'not signIn'})

        }
     
    }
    catch(e){
res.status(404).send('error come backend');
    }
 })

// route.get('/signUp',(req,res)=>{
//     res.send('hello4')
// })

// using aync await
route.post('/signUp' ,async(req,res)=>{
    try{
    // console.log(req.body);
    // res.json({message:req.body})
    // postman to come value so unde req.body all property present so destructure
let {name,email,password,cpassword,phone,work}=req.body;

if(!name || !email || !password|| !cpassword || !phone || !work){
    return res.status(440).json({error:'pls fill all field'})
}
 let userexist=await userInfo.findOne({email:email}) 
    if(userexist){
        return res.status(440).json({error:'email already exist'})

    }
    let result= new userInfo({
        name:name,
        email:email,
        phone:phone,
        password:password,
        cpassword:cpassword,
        work:work
    })
// bcript use
 
// jwt
let tokon= await result.Genertetokon();
 // *************cookie store darkar nai tahola user with out subscription sab axces paajaba **********
// but only user sign in a cookie and tokon store hoba so only reg ta kono tokoon create hoba na
 
// res.cookie('jwt',tokon,{
//     expires:new Date(Date.now()+253950055000),
//     httpOnly:true
// })

   let data=await result.save();
//    res.json ({}) & send same work
   res.status(200).json({message:'user regestration succes'})  

}
catch(e){
    console.log(e);
    res.status(500).json({message:'user reg faild'})  
}
  })
 
    

// using promice
// route.post('/signUp' ,(req,res)=>{
//     // console.log(req.body);
//     // res.json({message:req.body})
//     // postman to come value so unde req.body all property present so destructure
// let {name,email,password,cpassword,phone,work}=req.body;

// if(!name || !email || !password|| !cpassword || !phone || !work){
//     return res.status(440).json({error:'pls fill all field'})
// }
// userInfo.findOne({email:email}).then((exist)=>{
//     if(exist){
//         return res.status(440).json({error:'email already exist'})

//     }
//     let result= new userInfo({
//         name:name,
//         email:email,
//         phone:phone,
//         password:password,
//         cpassword:cpassword,
//         work:work
//     })

//     result.save().then(()=>{

// res.status(200).json({message:'user reg sucesfully'})  
//   }).catch((e)=>{
//     console.log(e)
//     res.status(500).json({message:'user reg faild'})  

//   })

// }).catch(e=>{
//     console.log(e)
// })
//     // console.log(name,email)
//  })

route.get('/home',auth ,(req,res)=>{
    res.send(req.user)
})
  

route.get('/about',auth,(req,res)=>{
    // if auth then backend to frontend send req.user of auth.js where specific user detail
    // so res.send(req.user) now froonten use this data
   
    res.send(req.user);
    // *********** any backend data can send under res.send(data)    *************
})
route.get('/about/abutcomponentntact',auth,(req,res)=>{
    res.send(req.user);
}) 

 
route.post('/contact',auth, async(req,res)=>{
    try{
        let {name,email,phone,message}=req.body;

        if(!name|| !email || !phone || !message){
            console.log('fill all the data')
        }
        // check user db ta acha naki
        let contactVerifyData= await userInfo.findOne({_id:req.userId});
 
        if(contactVerifyData){
            // tokongrnerate function moto message runtime a create hoi (addMessage ata fun)
            let userMessage= await contactVerifyData.addMessage(name,email,phone,message);
            await userMessage.save();
            res.status(201).json({message:'user contact success'});
        }
 }
catch(e){
    res.status(201).json({message:'error from backend /contact success'});
}
})

route.get('/logout',async(req,res)=>{
try{
    // req.user.tokons=[];
     res.clearCookie('jwt',{path:'/'});
//    res.send('ok')
res.status(200).send('user logout')
}
catch(e){
    console.log('not logout')
}
})

route.get('*',(req,res)=>{
    res.send('hello error')
})

module.exports=route;