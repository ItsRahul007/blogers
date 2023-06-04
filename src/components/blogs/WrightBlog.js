import React, { useRef, useState } from 'react';
import "./blogs.css";
import JoditEditor from 'jodit-react';

function WrightBlog() {
    const [content, setContent] = useState("")
    const editor = useRef(null)
    const config = ''
  return (
    <div className='blog'>
        <div className='blogTitle'>
            <label>Blog Title</label>
            <textarea type="text" placeholder='Your blog Title'/>
        </div>
        <div className='blogCategory'>
            <label>Blog Category</label>
            <input type='text' placeholder='Type of your blog'/>
        </div>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {console.log(newContent)}}
		/>
        <button className='postBTN'>Post Blog</button>
    </div>
  )
}

export default WrightBlog;