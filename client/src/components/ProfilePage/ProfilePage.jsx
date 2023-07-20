import React from "react";
import "./ProfilePage.css";
export default function ProfilePage() {
  return (
    <div className="flex flex-col items-start space-y-4 mt-10 ">
      <div className="border-r border-black pr-20">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Profile"
          className="w-60 h-60 rounded-full items-center"
        />
        <div className="text-center border-b border-gray-400">
          <h2 className="text-xl font-bold">Ajas Ashraf</h2>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Website: www.example.com</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">Company</h2>
          <p>Name: Company Name</p>
          <p>Catchphrase: Catchphrase here</p>
          <p>BS: BS here</p>
        </div>
      </div>
    </div>
  );
}
