import React from 'react'
import contactPic from "../../images/contactPic.png"

function Contact() {
  return (
    <div className='contact'>
      <div className='left-con'>
        <img src={contactPic}/>
      </div>
      <div className='right-con'>
        <h1>CONTACT US</h1>
        <div>
          <span>
            <i className="fa-sharp fa-solid fa-location-dot"></i> 
            <p>143 Anywhere, Any City, ST 12345</p>
          </span>
          <span>
            <i className="fa-solid fa-phone"></i> 
            <p>1234567890</p>
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i>
            <p>example@gmail.com</p>
          </span>
          <span>
            <i className="fa-sharp fa-solid fa-globe"></i>
            <p>www.exampleWebSite.com</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact