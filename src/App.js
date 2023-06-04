import LandingPage from "./components/Land-page/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Wrightblog from "./components/blogs/WrightBlog";
import ViewBlog from "./components/blogs/ViewBlog";
import Navbar from "./components/Layouts/Navbar";


function App() {
  const location = useLocation().pathname;
  console.log(location)
  return (
    <>
      {location!=="/"&&<Navbar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Viewblog" element={<ViewBlog/>}/>
        <Route path="/Wrightblog" element={<Wrightblog/>}/>
      </Routes>
    </>
  );
}

export default App;
