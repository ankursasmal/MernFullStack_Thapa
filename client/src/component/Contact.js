import React, {  useEffect, useState } from 'react'
  
import { useNavigate } from "react-router-dom"; 
function Contact() {
  const navigate = useNavigate();
// same use usestate apost value thakba
  let [uservalue,setuservalue]=useState({name:'',email:'',phone:'',message:''});
     let authorize=async()=>{
  
      try{
        let res=await fetch('/about',{
          method:'GET',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          // must for get req to get cookie and backend data
          credentials:"include"
        });
        // '/about' backend thaka res.send('data') through all data frontend a recive this is get req
        let data= await res.json();
         setuservalue(data);

        //  ************************ api data destructure**********************
// //  ******** for only specificc value from api data thaka chaila 
// let setuservalue={...uservalue, name:uservalue.name,email:uservalue.email,phone:uservalue.phone}
// // ********** if singel vale destruce
// let {aray nane}=data;


        // now user all data come under above data
         if(res.status!==200  ){
          console.log('data not come because user not login')
          throw new Error('not authorize user');
         }
  
      }
      catch(e){
        console.log(e);
  // if data not come means no auth login page a redirect hoba means 1st login then axcess
  navigate('/signIn');
  }
    }
  
  useEffect(()=>{
  authorize();
    },[])

// post create and also extra data field add
// 1.data state a add
let name,value;

let handelContactPost=(e)=>{
  e.preventDefault();
  name=e.target.name;
  value=e.target.value;
  setuservalue({...uservalue, [name]:value})

  console.log(uservalue.name,uservalue.email)
}


// 2.
let contactPost= async(e)=>{
e.preventDefault();
let {name,email,phone,message}=uservalue;

 let  res=await fetch('/contact',{
  method:'POST',
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
      name,
      email,
      phone,
      message
    })

  })

  let data=await res.json();
   if(!data){
    console.log('messege not post')
  }
  else{
  alert('message send succesfully');
  // after send messege field empty
  setuservalue({...uservalue,message:''})
}
}


  return (
    <> 
    <div   style={{display:'flex' ,alignItems:'center',justifyContent:'space-around',flexWrap:'wrap',marginTop:'20px'}}>
<div style={{display:'flex',flexDirection:'column',padding:'1vw 3vw' ,border:'2px solid blue'}}>
  <a>Name</a>
  <a style={{padding:'10px 0'}}>{uservalue.name}</a>

</div>
<div style={{display:'flex',flexDirection:'column',padding:'1vw 3vw' ,border:'2px solid blue'}}>
  <a>Email</a>
  <a style={{padding:'10px 0'}}>{uservalue.email}</a>

</div>
<div style={{display:'flex',flexDirection:'column',padding:'1vw 3vw' ,border:'2px solid blue'}}>
  <a>work</a>
  <a style={{padding:'10px 0'}}>{uservalue.work}</a>

</div>

     </div>
 
     <div style={{justifyContent:'center',display:'flex',alignItems:'center',paddingTop:'30px' }}>
      <form method='POST' action='/contact' style={{display: 'flex' ,width:'40vw', padding:'4px' , border:'2px soild black',flexDirection:'column'}} id="shadow">
    
      <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}> 

    <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
            <a style={{padding: "5px 0"}}>Email:</a>
    <input  type="email"  id="" placeholder="enter email" name="name" value={uservalue.name} onChange={handelContactPost}/>
    </div>
    <div  style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
            <a style={{padding: "5px 0"}}>phone:</a>
    
    <input type="text" name="email" id="" placeholder="enter pasword" value={uservalue.email} onChange={handelContactPost}/>
    </div>
    <div  style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
            <a style={{padding: "5px 0"}}>phone:</a>
    
    <input type="text" name="phone" id="" placeholder="enter pasword" value={uservalue.phone} onChange={handelContactPost}/>
    </div>
    </div>
    <textarea name="message" id="" rows={5} cols={10} value={uservalue.message}  onChange={handelContactPost}></textarea>
     
    <button type="submit" style={{padding: '4px 8px',alignSelf: 'center'}} onClick={contactPost}> submit</button>
    </form>
    </div>
 
     </>
  )
}

export default Contact
