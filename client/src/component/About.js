import React, { createContext, useEffect, useState } from 'react'
  
import { Outlet,Link, useNavigate } from "react-router-dom";
// data transper from about to anther page use context hook
let aboutinformation=createContext();


function About() {
    const navigate = useNavigate();
    
let [uservalue,setuservalue]=useState({});
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
      // nor user all data come under above data
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
   
  return (
    <aboutinformation.Provider value={uservalue}> 
    <div style={{display:'flex' ,alignItems:'center',justifyContent:'center',marginTop:'20px'}}>
     
     <div style={{display:'flex',flexDirection:'column', width:'20vw'}}>
<img src={""} style={{width:'10vw'}}/>
<a style={{marginTop:'10px'}}> about</a>
     </div>
     
     <div style={{display:'flex',flexDirection:'column', width:'60vw'}}>
     <div style={{display:'flex',alignItems:'center',justifyContent:'space-between', width:'60vw',margin:'10px 10px'}}>

      <div style={{display:'flex',flexDirection:'column'}}>
        <h1>{ uservalue.name}</h1>
        <p>{uservalue.work}</p>
 
      </div>
      <button className='btn btn-secondary p-1'>Edit profile</button>
      </div>

      <div style={{display:'flex', width:'40vw',margin:'10px 10px'}}>
        <Link to='/about/abutcomponent'>About</Link>
       <Link to='/about/timeline' style={{padding:'0 20px'}}>TimeLine</Link>
</div>
<Outlet/>
     
</div>
     </div>
     </aboutinformation.Provider>
  )
}

export default About
export {aboutinformation};
