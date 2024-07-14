import React, { useContext, useState } from 'react'
import {  Link } from "react-router-dom";
import {aboutinformation} from './About.js'

function Nav() {
  // not work using useredud hook neccery
  let contextdata=useContext(aboutinformation);
    let [show,setshow]=useState(false);
   
  return (
    < >
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
     <Link to='/home'>   <li className="nav-item">
          <a className="nav-link active" aria-current="page"  >Home</a>
        </li></Link> 
        <Link to='/about'>    <li className="nav-item">
          <a className="nav-link"  >About</a>
        </li></Link>
        <Link to='/contact'>   <li className="nav-item">
          <a className="nav-link" >Contact</a>
        </li></Link>
       
     
         <Link to='/signIn'>    <li className="nav-item">
          <a className="nav-link"  >singIn</a>
        </li></Link>

        <Link to='/signUp'>    <li className="nav-item">
          <a className="nav-link"  >SignUp</a>
        </li></Link> 

  <Link to='/logout'>   <li className="nav-item">
  <a className="nav-link" >LogOut</a>
</li></Link>

         
      </ul>
      
    </div>
  </div>
</nav> 
    </>
  )
}

export default Nav
