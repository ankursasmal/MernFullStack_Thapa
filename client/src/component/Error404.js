import React from 'react'
import {  Link } from "react-router-dom";

function Error404() {
  return (
    <div style={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{marginTop:'20vw'}}>404</h1>
      <h1 style={{padding:'20px 0'}}>the page not found</h1>
      <Link to='/' className='btn btn-info' style={{padding:'4px 10px'}} >Back to Home</Link>
    </div>
  )
}

export default Error404
