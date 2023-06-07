import React, { useContext, useState } from 'react'
import BlogItem from './BlogItem';
import BlogNav from './BlogNav';
import BlogContext from '../../contexts/BlogContext';

function ViewBlog() {
  const { blogs, setFullBlog } = useContext(BlogContext);
  const [allBlogs, setAllBlogs] = useState(blogs);
  const [head, setHead] = useState('new')

  function filterBlog(nish) {
    if (nish !== "All_blogs" && nish.length !== 0) {
      const fil = blogs.filter(e => e.category === nish);
      setAllBlogs(fil);
      setHead(nish);
    }
    else {
      setAllBlogs(blogs);
      setHead("new");
    }
  }

  return (
    <>
      <BlogNav filterBlog={filterBlog} />
      <div className='ViewBlog'>
        {allBlogs.length !== 0 && <h1>{head.charAt(0).toUpperCase() + head.slice(1)} blogs</h1>}
        <div className='mx-4 my-5 row'>
          {allBlogs.length !== 0? 
          allBlogs.map((blog) => {
            return (
              <div key={blog.id} className='my-2 col-md-3'>
                <BlogItem allBlog={blog} setFullBlog={setFullBlog} />
              </div>
            )
          })
          : 
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem"}}>
            Can't finde any related blogs
          </div>
        }
        </div>
      </div>
    </>
  )
}

export default ViewBlog;