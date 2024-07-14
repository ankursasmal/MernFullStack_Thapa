import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
        const navigate = useNavigate();
        
        let [user,setuser]=useState({name:"",email:"",phone:"",password:"",cpassword:"",work:""})

let name,value;
let handelChange=(e)=>{
         console.log(user)
        name=e.target.name;
        value=e.target.value;
        setuser({...user,[name]:value})
}

 const postData=async(e)=>{
        e.preventDefault();
        let {name ,email,phone,password,cpassword,work}=user;
      let res= await fetch("/signUp",{

        method:"POST",
        headers:{
                "Content-Type":"application/json"
        },
        // ata normal obj formt but browser only json under stand so JSON.stringify ({under value})

        body:JSON.stringify({
         name:name,
        email:email,
        phone:phone,
        work:work,
        password:password,
        cpassword:cpassword  
        })
      })
      let data=await res.json()
      if(data.status===422 || !data ){
        window.alert('Invalid Reg')
      }
      else{
        window.alert(' Reg successfull')
        navigate('/signIn');
}
}


  return (
    <div style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
  <form action="/signUp" method="POST" style={{display: 'flex',flexDirection:'column ', width:'40vw', padding:'4px' , border:'2px soild black'}} id="shadow">
      <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>Name:</a>
  <input type="text" name="name" id="name" placeholder="enter name" style={{padding: '8px 4px'}}  autoComplete='off'  value={user.name} onChange={handelChange}/>
   </div>
  
  <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>Email:</a>
  <input  type="email"  id="email" placeholder="enter email" name="email" autoComplete='off'  value={user.email} onChange={handelChange}/>
  </div>
  <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>Password:</a>
  
  <input type="password" name="password" id="password" placeholder="enter pasword" autoComplete='off'  value={user.password} onChange={handelChange}/>
  </div>
  <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>confirmPassword:</a>
  
  <input type="password" name="cpassword"   id="cpassword" placeholder="enter confirmpassword" value={user.cpassword} autoComplete='off'  onChange={handelChange}/>
  </div>
  
  <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>phone:</a>
  
  <input type="text" name="phone"  id="phone" placeholder="enter phone" autoComplete='off' value={user.phone}  onChange={handelChange}/>

  </div>
  <div style={{display:'flex',margin:'10px 5px',flexDirection:"column"}}> 
          <a style={{padding: '5px 0'}}>work:</a>
  
  <input type="text" name="work"  id="work" placeholder="enter phone" autoComplete='off'  value={user.work} onChange={handelChange}/>
  
  </div>
  <button type="submit" style={{padding: '4px 8px',alignSelf: 'center'}} onClick={postData}> submit</button>
  </form>    </div>
  )
}

export default SignUp
