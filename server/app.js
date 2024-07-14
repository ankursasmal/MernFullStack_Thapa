require('dotenv').config();
let express=require('express');
let app=express();
let router=require('./router/route.js')
 let PORT=process.env.PORT || 3000;
// require connectio db
require('./db/conn.js')
// model add
let userInfo=require('./model/userInf.js')
 
// for recognize json for browser
app.use(express.json())

// for use router middel ware
app.use(router);
 


// // middle ware
// const middlewear=(req,res,next)=>{
//     console.log('middle wear work')
//     next();
// }
 

app.listen(PORT,()=>{
    console.log(' server succesfull')
})