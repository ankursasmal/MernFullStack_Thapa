import React, { useEffect, useState } from 'react'
  
import { Outlet,Link, useNavigate } from "react-router-dom";

function AboutComponent() {
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
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', width:'40vw',margin:'10px 10px'}}>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>User Id</b>
      <b style={{color:'blue'}}>{uservalue._id}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Name</b>
      <b style={{color:'blue'}}>{uservalue.name}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Email</b>
      <b style={{color:'blue'}}>{uservalue.email}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Phone</b>
      <b style={{color:'blue'}}>{uservalue.phone}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Profficen</b>
      <b style={{color:'blue'}}>{uservalue.work}</b>
    </div>
    </div>
  )
}

export default AboutComponent
