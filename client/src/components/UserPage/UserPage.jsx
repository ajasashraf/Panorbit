import React from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import ComingSoonPage from "../ProfilePage/ComingSoonPage";
export default function UserPage({ item }) {
  return (
    <>
      {item === "Profile" && (
        <>
          <ProfilePage />
        </>
      )}
      {item === "Posts" && (
        <>
          <ComingSoonPage />
        </>
      )}
      {item === "Gallery" && (
        <>
          <ComingSoonPage />
        </>
      )}
      {item === "Todo" && (
        <>
          <ComingSoonPage />
        </>
      )}
    </>
  );
}
