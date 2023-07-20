import React, { useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  const [item, setItem] = useState("Profile");

  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  return (
    <>
      {/* <HomePage/> */}
      <div className="flex">
        <SideBar setItem={setItem} item={item} />
      </div>
      {/* <ProfilePage/> */}
    </>
  );
}

export default App;
