import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import blog_icon from "../../images/blog_icon.png";

function BlogNav({filterBlog}) {
  const [filter, setFilter] = useState("")

  // filtering blog with the click or search value
  function handleSearch(){
    filterBlog(filter);
  };

  return (
    <nav className='blogNav'>
      <div className='nav-icon'>
        <Link to="/"><img src={blog_icon} alt='Blogers'/></Link>
      </div>
      <ul>
        <li><button onClick={()=>filterBlog("All_blogs")}>All blogs</button></li>
        <li><button onClick={()=>filterBlog("cricket")}>Cricket</button></li>
        <li><button onClick={()=>filterBlog("futball")}>Futball</button></li>
        <li><button onClick={()=>filterBlog("politics")}>Politics</button></li>
      </ul>
      <div className='search'>
        <input type='text' placeholder='Blog category' onChange={e => {
            setFilter(e.target.value)
          }} />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  )
}

export default BlogNav;