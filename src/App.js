import LandingPage from "./components/home/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Wrightblog from "./components/blogs/WrightBlog";
import ViewBlog from "./components/blogs/ViewBlog";
import Navbar from "./components/Layouts/Navbar";
import Contact from "./components/home/Contact";
import About from "./components/home/About";


function App() {
  const location = useLocation().pathname;
  return (
    <>
      {location!=="/Viewblog"&&<Navbar/>}
      {location==="/Contact"&&<Navbar black="black"/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Viewblog" element={<ViewBlog/>}/>
        <Route path="/Wrightblog" element={<Wrightblog/>}/>
      </Routes>
    </>
  );
};

export default App;
