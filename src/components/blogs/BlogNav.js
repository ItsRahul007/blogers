import React from 'react'
import { Link } from 'react-router-dom';
import blog_icon from "../../images/blog_icon.png";

function BlogNav() {
  return (
    <nav className='blogNav'>
      <div className='nav-icon'>
        <Link to="/"><img src={blog_icon} alt='Blogers'/></Link>
      </div>
      <ul>
        <li><button>All blogs</button></li>
        <li><button>Cricket</button></li>
        <li><button>Futball</button></li>
        <li><button>Politics</button></li>
      </ul>
      <div className='search'>
        <input type='text' placeholder='Blog category'/>
        <button>Search</button>
      </div>
    </nav>
  )
}

export default BlogNav;