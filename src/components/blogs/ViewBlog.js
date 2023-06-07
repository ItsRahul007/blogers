import React, { useContext, useState } from 'react'
import BlogItem from './BlogItem';
import BlogNav from './BlogNav';
import BlogContext from '../../contexts/BlogContext';

function ViewBlog() {
  const { blogs, setFullBlog } = useContext(BlogContext);
  const [allBlogs, setAllBlogs] = useState(blogs)

  function filterBlog(nish) {
    if (nish !== "All_blogs") {
      const fil = blogs.filter(e => e.category === nish); //TODO: filter empty hole ki6u kor r blog er paragraph take slice kor 
      setAllBlogs(fil);
    }
    else setAllBlogs(blogs);
  }

  return (
    <>
      <BlogNav filterBlog={filterBlog} />
      <div className='ViewBlog'>
        <h1>New blogs</h1>
        <div className='mx-4 my-5 row'>
          {allBlogs.map((blog) => {
            return (
              <div key={blog.id} className='my-2 col-md-3'>
                <BlogItem allBlog={blog} setFullBlog={setFullBlog} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ViewBlog;