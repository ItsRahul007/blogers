import React, { useContext } from 'react'
import BlogContext from '../../contexts/BlogContext'
import { useNavigate } from 'react-router-dom';

function FullBlog() {
    const navigate = useNavigate()
    const {fullBlog, setFullBlog} = useContext(BlogContext);

    function handleGoBack(){
        navigate("/Viewblog");
        setFullBlog({});
    }
  return (
    <div>
        FullBlog
        {/* TODO: HTML TAKE COMPLETE KOR R SOB KI6U RENDER HOBE fullBlog THEKE R AKTA GOBACK BUTTON LAGABI  */}
    </div>
  )
}

export default FullBlog