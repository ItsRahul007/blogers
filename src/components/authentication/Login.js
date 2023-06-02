import React from 'react';
import "./auth.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='log'>
       <h1>Login</h1>
        <form className='login-form'>
          <input className='inputs' type='email' placeholder='Enter your email'/>
          <input className='inputs' type='password' placeholder='Set your password'/>
          <button className='btn' type='submit'>Login</button>
        </form>
        <div className='login-other'>
          <span>or login with</span>
          <a target='_blank'><i className="fa-brands fa-facebook"></i></a>
          <a target='_blank'><i className="fa-brands fa-instagram"></i></a>
          <a target='_blank'><i className="fa-brands fa-google"></i></a>
        </div>
        <div className='noAccount'>
          Don't have an account <Link to="/Signup">Signup</Link>
        </div>
      </div>    
    </>
  )
}

export default Login