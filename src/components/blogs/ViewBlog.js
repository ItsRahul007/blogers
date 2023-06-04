import React, {useState} from 'react'
import BlogItem from './BlogItem';
import BlogNav from './BlogNav';

function ViewBlog() {
  const [blogs, setBlogs] = useState(['hello'])

  return (
    <>
      <BlogNav/>
      <div className='ViewBlog'>
        <h1>New blogs</h1>
        {blogs.map((blog)=>{
          <BlogItem />
        })}
      </div>    
    </>
  )
}

export default ViewBlog;