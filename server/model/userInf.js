let mongoose=require('mongoose')
let jwt=require('jsonwebtoken')
let bcript=require('bcryptjs')
let userInfoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        minlength:6,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
     },
     work:{
type:String,
     },
     password:{
        type:String,
        required:true,
     },
    cpassword:{
        type:String,
        required:true,
     },
     date:{
        type:Date,
        default:Date.now
     },
     messages:[ {
        name:{
        type:String,
        required:true,
     },
    email:{
        type:String,
        required:true,
     } ,
     phone:{
        type:Number,
        required:true,
     },
     message:{
        type:String,
        required:true,
     }
    }],
     tokons:[{
        tokon:{
            type:String,
            required:true
        }
     }]
});

userInfoSchema.pre('save', async function(next){
    // only pass word a change or create
if(this.isModified('password')){
this.password= await bcript.hash(this.password,10);
this.cpassword= await bcript.hash(this.cpassword,10);

}
    next();
})
userInfoSchema.methods.Genertetokon=async function(){
  try{  let tokon= await jwt.sign({
        _id:this._id.toString(),
        name:this.name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        cpassword:this.cpassword,
        work:this.work 
    
    },process.env.SECRET_KEY,{
        expiresIn:'30d'

    })
this.tokons=this.tokons.concat({tokon:tokon});
await this.save();
 return tokon;

  }
  catch(e){
    console.log(e)
    return ;
  }
}

// for contact detail message also new field add(when new filed add same process)

 userInfoSchema.methods.addMessage=async function(name,email,phone,message){
    // arg recive from rout.js page
    try{
this.messages=this.messages.concat({name:name,email:email,phone:phone,message:message})
await this.save();
return this.messages;    
}
    catch(e){
console.log('ffrmon backend model page',e);
    }
}


let userInfo=new mongoose.model('userInfo',userInfoSchema);

module.exports=userInfo;