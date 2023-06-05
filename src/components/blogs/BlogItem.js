import React from 'react'
import { Link } from 'react-router-dom';

function BlogItem() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={``} className="card-img-top" alt="blog-img"/>
        <div className="card-body">
          <h5 className="card-title">Blog title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/" target='_blank' className="btn btn-primary">Full blog</Link>
        </div>
    </div>
  );
};

export default BlogItem;