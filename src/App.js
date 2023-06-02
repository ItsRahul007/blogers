import LandingPage from "./components/Land-page/LandingPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/authentication/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
