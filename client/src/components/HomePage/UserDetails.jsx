import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDetails.css";

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div
          className="w-96 rounded-3xl bg-zinc-100  overflow-hidden shadow-lg"
          style={{ marginLeft: "-38%", width: "160%" }}
        >
          <div className="px-6  my-10">
            <div className="font-semibold flex justify-center text-xl mb-8">
              Select an account
            </div>
          </div>
          <div className="h-96 overflow-y-auto selector">
            {userData.users.map((user) => (
              <>
                <div className="bg-white">
                  <div
                    className="flex items-center bg-white border-b-2 mr-10 ml-10"
                    key={user.id}
                  >
                    <div className="block mx-auto ml-6 h-25 sm:mx-0 sm:shrink-0 object-cover  w-[35px]">
                      <img
                        src={user.profilepicture}
                        className="rounded-full ml-8 "
                      />
                    </div>
                    <div>
                      <a href="#">
                        <h5 className="text-gray-900  text-xl tracking-tight mb-2  py-3 px-14 dark:text-black">
                          {user.username}
                        </h5>
                      </a>
                    </div>
                    <div className="border-b-2"></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
