import React, {  useEffect, useState } from 'react'
 
function Home() {
     let [show,setshow]=useState(false)
  let [username,setuserName]=useState('');

     let authorize=async()=>{
          let res=await fetch('/home',{
          method:'GET',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          // must for get req to get cookie and backend data
          credentials:"include"
        });
         let data= await res.json();
         setuserName(data.name);
     if(data){
      setshow(true);
     }
    }
  
  useEffect(()=>{
  authorize();
    },[])
     
  return (
    <div style={{display:'flex',height:'100vw'}}>
      <div style={{position:'absolute',top:'46%',left:'34%'}}>
        {show?<h1>Welcome {username} to our home page</h1>:<h1>we are mern devolaper</h1>}
      
        </div>
      
     </div>
  )
}

export default Home
