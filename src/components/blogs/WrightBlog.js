import React, { useRef, useState, useContext } from 'react';
import "./blogs.css";
import JoditEditor from 'jodit-react';
import BlogContext from '../../contexts/BlogContext';

function WrightBlog() {
    const {addBlog} = useContext(BlogContext);
    const [content, setContent] = useState("");
    const [newBlog, setNewBlog] = useState({}); //for adding new blog
    const [num, setNum] = useState(11);
    const [value, setValue] = useState({title: "", imgUrl: "", category: ""});
    const editor = useRef(null);
    const config = '';

    // on changing setting the value
    function onChange(e){
        setValue({...value, [e.target.name]: e.target.value});
        setNewBlog({...value, blog: content, id: num})
    };

    // adding the new blog
    function submitBlog(){
        setNum(num+1);
        addBlog(newBlog);
        setContent('');
        setValue({title: "", imgUrl: "", category: ""});
    };
    
  return (
    <div className='blog'>
        <div>
            <div className='blogTitle blogCategory'>
                <label>Blog Title</label>
                <textarea name='title' type="text" value={value.title} placeholder='Your blog Title' onChange={onChange}/>
            </div>
            <div className='blogCategory'>
                <label>Blog Category</label>
                <input name='category' type='text' value={value.category} placeholder='Type of your blog' onChange={onChange}/>
            </div>
            <div className='blogCategory'>
                <label>Image url</label>
                <input name='imgUrl' type='text' value={value.imgUrl} placeholder='Image related your blog category' onChange={onChange}/>
            </div>
        </div>
		<JoditEditor
			ref={editor}
            value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => {
                setContent(newContent);
                setNewBlog({...value, blog: newContent, id: num});
            }}
		/>
        <button onClick={submitBlog} className='postBTN'>Post Blog</button>
    </div>
  )
}

export default WrightBlog;