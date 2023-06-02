import React from 'react'
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()
  const handleLogin = ()=>{
    navigate("/Login")
  }
  const handleHome = ()=>{
    navigate("/Home")
  }
  return (
    <div id='body'>
      <h1>Welcome to The Blogers</h1>
      <div>
        <button className='landBTN' onClick={handleLogin}>Wright Blogs</button>
        <span>or</span>
        <button className='landBTN' onClick={handleHome}>Read Blogs</button>
      </div>
    </div>
  )
}

export default LandingPage