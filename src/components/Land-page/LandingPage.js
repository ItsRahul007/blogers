import React from 'react'
import "./LandingPage.css"
import { Link } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'

function LandingPage() {
  return (
    <>
      <Navbar/>
      <div id='body'>
        <h1>Welcome to The Blogers</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos neque error amet voluptas rerum, ea qui vero et numquam nisi cupiditate, reiciendis doloribus quaerat ratione soluta repellat dolorem vitae modi quos pariatur!</p>
        <div>
          <Link className='landBTN' to="/Login">Wright Blogs</Link>
          <span>or</span>
          <Link className='landBTN' to="/viewblog">Read Blogs</Link>
        </div>
      </div>    
    </>
  )
}

export default LandingPage