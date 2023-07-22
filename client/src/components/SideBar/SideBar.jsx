// SideBar.js

import React, { useState } from "react";
import "./SideBar.css";
import Header from "../Header/Header";
import ChatPage from "../Chat/ChatPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({ setItem, item }) {
  return (
    <>
      <div className="grid grid-cols-2 w-screen">
        <div className="sidebar rounded-3xl">
          <nav className="nav font-semibold cursor-pointer">
            <ul>
              <li className={`${item === "Profile" ? "active" : ""}`}>
                <a onClick={() => setItem("Profile")}>Profile</a>
                {item === "Profile" && (
                  <div className="absolute -right-7 top-0 z-50">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                )}

                <hr />
              </li>
              <li className={`${item === "Posts" ? "active" : ""}`}>
                <a onClick={() => setItem("Posts")}>Posts</a>
                {item === "Posts" && (
                  <div className="absolute -right-7 top-0 z-50">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                )}

                <hr />
              </li>
              <li className={`${item === "Gallery" ? "active" : ""}`}>
                <a onClick={() => setItem("Gallery")}>Gallery</a>
                {item === "Gallery" && (
                  <div className="absolute -right-7 top-0 z-50">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                )}
                <hr />
              </li>
              <li className={`${item === "ToDo" ? "active" : ""}`}>
                <a onClick={() => setItem("ToDo")}>ToDo</a>
                {item === "ToDo" && (
                  <div className="absolute -right-7 top-0 z-50">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                )}
                <hr />
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8" style={{ marginLeft: "50%", width: "140%" }}>
          <Header item={item} />
        </div>
        <ChatPage />
      </div>
    </>
  );
}
