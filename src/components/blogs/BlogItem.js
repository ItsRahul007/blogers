import React from 'react';
import parser from "html-react-parser";
import { useNavigate } from 'react-router-dom';

function BlogItem({ allBlog, setFullBlog }) {
  const { title, imgUrl, blog } = allBlog;
  const navigate = useNavigate();

  function handleFullBlog() {
    setFullBlog(allBlog)
    navigate('/Fullblog');
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      {imgUrl.length > 5 && <img src={imgUrl} className="card-img-top" alt="blog-img" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-text">{ blog.length > 150? parser(blog).slice(0, 150) + "..." : parser(blog)  }</span>
        <button onCanPlay={handleFullBlog} className="btn mt-4 btn-primary">Full blog</button>
      </div>
    </div>
  );
};

export default BlogItem;