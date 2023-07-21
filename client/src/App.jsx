import React, { useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { useState } from "react";
import UserProfile from "./components/Pages/UserProfile/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";




function App() {
  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    
  
    </div>
  );
}

export default App;
