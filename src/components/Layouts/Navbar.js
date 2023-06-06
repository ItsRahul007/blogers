import React from 'react';
import "./navbar.css";
import blog_icon from "../../images/blog_icon.png";
import { Link } from 'react-router-dom';

function Navbar({black}) {
  return (
    <>
      <nav className='nav'>
        <div className='nav-icon'>
          <Link to="/"><img src={blog_icon} alt='Blogers'/></Link>
        </div>
        <ul>
          <li><Link style={{color:black}} to="/">Home</Link></li>
          <li><Link style={{color:black}} to="/Viewblog">Blogs</Link></li>
          <li><Link style={{color:black}} to="/Wrightblog">Start blogging</Link></li>
          <li><Link style={{color:black}} to="/Contact">Contact</Link></li>
        </ul>
        <div className='login-signup'>
          <Link to="/Login">Login</Link>
          <Link to="/Signup">Signup</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;