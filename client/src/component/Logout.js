import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 

function Logout() {
    const navigate = useNavigate();

    // use efect under async not work prmice use korta hoba
useEffect(()=>{
fetch('/logout',{
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        // must for get req to get cookie and backend data
        credentials:"include"
}).then((res)=>{
navigate('/signIn');
if(res.status!==200){
    throw new Error('res.error')
}
}).catch((e)=>{
console.log(e)})
})

  return (
    <div>
      <h1>LogOut page</h1>
    </div>
  )
}

export default Logout
