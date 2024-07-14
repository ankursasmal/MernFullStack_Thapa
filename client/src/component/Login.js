import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  let [email,setemail]=useState('');
  let [password,setpassword]=useState('');

  let loginuser=async(e)=>{
    try{
      e.preventDefault();
 let res=await fetch('/signIn',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
email:email,
password:password
  })
})
let data=await res.json();
if(!data || res.status===400){
   window.alert('Invalid Reg')
}
else{
  window.alert(' Reg successfull')
  navigate('/home');
}
    }
    catch(e){
      navigate('/signIn');

      window.alert(' Reg successfull not succ it come catch in frontende login')
    }
  }

  return (
    <div style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
      <form action="/signIn" method="POST" style={{display: 'flex',flexDirection:'column ',width:'40vw', padding:'4px' , border:'2px soild black'}} id="shadow">
    

    <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
            <a style={{padding: "5px 0"}}>Email:</a>
    <input  type="email"  id="" placeholder="enter email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
    </div>
    <div  style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
            <a style={{padding: "5px 0"}}>Password:</a>
    
    <input type="password" name="password" id="" placeholder="enter pasword" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </div>
     
    <button type="submit" style={{padding: '4px 8px',alignSelf: 'center'}} onClick={loginuser}> submit</button>
    </form>
    </div>
  )
}

export default Login
