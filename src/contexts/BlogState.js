import React, {useState} from 'react'
import BlogContext from './BlogContext'

const theBlog = [
    {
        id: "1",
        category: "cricket",
        imgUrl: "https://www.siasat.com/wp-content/uploads/2023/01/Cricket.jpg",
        title: "A example cricket title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "2",
        category: "futball",
        imgUrl: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg?w=1200",
        title: "A example futball title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "3",
        category: "politics",
        imgUrl: "https://assets.thehansindia.com/h-upload/2022/04/30/1289736-politics.webp",
        title: "A example politics title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "4",
        category: "hockey",
        imgUrl: "https://images.indianexpress.com/2021/11/jr-hockey-team-India.jpg?w=640",
        title: "A example hockey title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "5",
        category: "social media",
        imgUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "A example social media title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "6",
        category: "apple",
        imgUrl: "https://photos5.appleinsider.com/gallery/47670-93100-000-lead-Apple-Logo-xl.jpg",
        title: "A example apple title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "7",
        category: "cricket",
        imgUrl: "https://www.siasat.com/wp-content/uploads/2023/01/Cricket.jpg",
        title: "A example cricket title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "8",
        category: "futball",
        imgUrl: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg?w=1200",
        title: "A example futball title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "9",
        category: "futball",
        imgUrl: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg?w=1200",
        title: "A example futball title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
    {
        id: "10",
        category: "apple",
        imgUrl: "https://photos5.appleinsider.com/gallery/47670-93100-000-lead-Apple-Logo-xl.jpg",
        title: "A example apple title is here",
        blog: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos maiores voluptatibus modi cumque doloremque ducimus, facere obcaecati est quo nisi debitis velit nam doloribus sapiente quod ut odio? Debitis?"
    },
];

function BlogState(props) {
    const [blogs, setBlogs] = useState(theBlog);
    const [fullBlog, setFullBlog] = useState({})

    // concat the blog array with a new blog and new blog must be an object
    function addBlog(newBlog){
        setBlogs(blogs.concat(newBlog));
    };

  return (
    <BlogContext.Provider value={{blogs, addBlog, fullBlog, setFullBlog}}>
        {props.children}
    </BlogContext.Provider>
  )
}

export default BlogState;