import React from 'react'
import "./auth.css"

function Login() {
  return (
    <div className='log'>
      <form className='login-form'>
        <input className='inputs' type='text' placeholder='Enter your name'/>
        <input className='inputs' type='email' placeholder='Enter your email'/>
        <input className='inputs' type='password' placeholder='Set your password'/>
        <input className='inputs' type='password' placeholder='Confirm password'/>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <div className='v1'></div>
        <span>or</span>
        <div className='v2'></div>
      </div>
      <div className='other-option'>
        icon icon icon
      </div>
    </div>
  )
}

export default Login