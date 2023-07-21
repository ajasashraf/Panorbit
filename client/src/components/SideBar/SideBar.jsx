import React, { useState } from "react";
import "./SideBar.css";
import Header from "../Header/Header";
export default function SideBar({ setItem, item }) {
  return (
    <>
      <div className="grid grid-cols-2 w-screen">
        <div className="sidebar rounded-3xl">
          <nav className="nav font-semibold">
            <ul>
              <li className="active">
                <a onClick={() => setItem("Profile")}>Profile</a>
                <hr />
              </li>
              <li>
                <a onClick={() => setItem("Posts")}>Posts</a>
                <hr />
              </li>
              <li>
                <a onClick={() => setItem("Gallery")}>Gallery</a>
                <hr />
              </li>
              <li>
                <a onClick={() => setItem("ToDo")}>ToDo</a>
                <hr />
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8" style={{ marginLeft: "50%", width: "140%" }}>
          <Header item={item} />
        </div>
      </div>
    </>
  );
}
