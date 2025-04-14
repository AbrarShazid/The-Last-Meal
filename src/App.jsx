import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home-Page/Home";
import { Outlet } from "react-router";

function App() {

  const[mode,setMode]=useState(true);


  return (
    <div className={mode?"text-black bg-white space-y-[2%] ":"bg-gray-800 text-white space-y-[2%] "}>
      <Navbar mode={mode} setMode={setMode}></Navbar>
     
      <Outlet />

      <Footer mode={mode}></Footer>
    </div>
  );
}

export default App;
