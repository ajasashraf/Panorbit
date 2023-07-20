import React from "react";
import "./HomePage.css";
import UserDetails from "./UserDetails";

export default function HomePage() {
  return (
    <>
      <div className="main"></div>
      <svg viewBox="0 0 500 200">
        <path
          d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
          fill="url(#gradient)"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="12%" stopColor="rgba(109,47,200,1)"></stop>
            <stop offset="24%" stopColor="rgba(86,65,200,1)"></stop>
            <stop offset="69%" stopColor="rgba(86,65,200,1)"></stop>
            <stop offset="80%" stopColor="rgba(62,87,200,1)"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-40  w-screen" style={{ marginTop: "-56%" }}>
        <div className="user-details-container ">
          <UserDetails />
        </div>
      </div>
    </>
  );
}
