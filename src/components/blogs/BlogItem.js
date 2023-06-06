import React from 'react'

function BlogItem({allBlog}) {
  const {title, imgUrl, blog, BlogLink} = allBlog;
  return (
    <div className="card" style={{width: "18rem"}}>
      {imgUrl.length>5 &&<img src={imgUrl} className="card-img-top" alt="blog-img"/>}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{blog}</p>
          <a href={BlogLink} className="btn btn-primary">Full blog</a>
        </div>
    </div>
  );
};

export default BlogItem;