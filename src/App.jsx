import React from 'react'
import './App.css'
import { useState } from 'react'
export default function App() {
  const[name,setName]=useState('Arif jamal');
  const[email,setEmail]=useState('arifjmal@g,ail.com');
const handleName=(e)=>{
setName(e.target.value)
};
const handleEmail=(e)=>{
  setEmail(e.target.value)
}
  return (
    <div>
      <input type="text"name='name'  value={name} 
      onChange={handleName} />
      <br />
      <input type="text"name='email' value={email}
      onChange={handleEmail} />
      
    </div>
  )
}
