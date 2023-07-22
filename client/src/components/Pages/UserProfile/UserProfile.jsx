import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
export default function UserProfile() {
  const [item, setItem] = useState("Profile");

  return (
    <div className="flex">
      <SideBar setItem={setItem} item={item} />
    </div>
  );
}
