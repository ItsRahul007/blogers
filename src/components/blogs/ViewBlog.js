import React, { useContext } from 'react'
import BlogItem from './BlogItem';
import BlogNav from './BlogNav';
import BlogContext from '../../contexts/BlogContext';

function ViewBlog() {
  const {blogs} = useContext(BlogContext);
  console.log(blogs)

  return (
    <>
      <BlogNav/>
      <div className='ViewBlog'>
        <h1>New blogs</h1>
        <div className='mx-4 my-5 row'>
          {blogs.map((blog)=>{
            return(
              <div key={blog.id} className='my-2 col-md-3'>
                <BlogItem allBlog={blog} />
              </div>
          )})}
        </div>
      </div>    
    </>
  )
}

export default ViewBlog;