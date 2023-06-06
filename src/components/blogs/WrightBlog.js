import React, { useRef, useState, useContext } from 'react';
import "./blogs.css";
import JoditEditor from 'jodit-react';
import BlogContext from '../../contexts/BlogContext';

function WrightBlog() {
    const {addBlog} = useContext(BlogContext);
    const [content, setContent] = useState("");
    const [value, setValue] = useState({title: "", imgUrl: "", category: ""})
    const editor = useRef(null);
    const config = '';

    function onChange(e){
        setValue({...value, [e.target.name]: e.target.value});
    };

    function submitBlog(){
        setValue({...value, blog: content, id:"100"});
        addBlog(value);
    };
    
  return (
    <div className='blog'>
        <div className='blogTitle'>
            <label>Blog Title</label>
            <textarea name='title' type="text" placeholder='Your blog Title' onChange={onChange}/>
        </div>
        <div className='blogCategory'>
            <label>Blog Category</label>
            <input name='category' type='text' placeholder='Type of your blog' onChange={onChange}/>
        </div>
        <div className='blogCategory'>
            <label>Give image url</label>
            <input name='imgUrl' type='text' placeholder='Image related your blog category' onChange={onChange}/>
        </div>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => setContent(newContent)}
		/>
        <button onClick={submitBlog} className='postBTN'>Post Blog</button>
    </div>
  )
}

export default WrightBlog;