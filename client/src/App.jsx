import React, { useEffect } from "react";
import "./App.css";
import UserProfile from "./components/Pages/UserProfile/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";

function App() {
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
