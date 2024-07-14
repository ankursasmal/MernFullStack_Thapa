import React, { useContext } from 'react'
import {aboutinformation} from './About.js'

function TimelineComponent() {
  let contextdata=useContext(aboutinformation)
  
    return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', width:'40vw',margin:'10px 10px'}}>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Experience</b>
      <b style={{color:'blue'}}>{contextdata._id}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Hourly RAte</b>
      <b style={{color:'blue'}}>id</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>Total project</b>
      <b style={{color:'blue'}}>id</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>contact</b>
      <b style={{color:'blue'}}>{contextdata.email}</b>
    </div>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',margin:'10px 0'}}>
      <b>name</b>
      <b style={{color:'blue'}}>{contextdata.name}</b>
    </div>
    </div>
  )
}

export default TimelineComponent
