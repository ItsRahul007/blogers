import React, {useState} from 'react'
import BlogItem from './BlogItem';
import BlogNav from './BlogNav';

function ViewBlog() {
  const [blogs, setBlogs] = useState(['hello', "bolo", 3, 4]);

  return (
    <>
      <BlogNav/>
      <div className='ViewBlog'>
        <h1>New blogs</h1>
        <div className='row'>
          {blogs.map((blog)=>{
            return(
            <div className='my-2 col-md-3'>
              <BlogItem />
            </div>
          )})}
        </div>
      </div>    
    </>
  )
}

export default ViewBlog;