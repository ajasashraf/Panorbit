import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function ProfilePage() {
  const location = useLocation();
  const userId = location.state;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://panorbit.in/api/users.json");
      const value = response.data.users.filter((data) => {
        return data.id === userId;
      });
      setData(value);
    };
    fetchData();
  }, []);
  return (
    <>
      {data.map((user) => (
        <>
          <div
            className="flex flex-col items-center space-y-4 mt-10"
            key={user.id}
          >
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-start space-y-4">
                <div className=" border-r border-zinc-700 pr-8 ">
                  <div className="flex justify-center">
                    <img
                      src={user.profilepicture}
                      alt="Profile"
                      className="w-60 h-60 rounded-full items-center"
                    />
                  </div>
                  <div className="text-start border-b border-gray-400 text-lg mt-4 pb-5">
                    <h2 className="text-xl font-bold text-zinc-600 text-center">
                      {user.name}
                    </h2>
                    <div className="flex mt-2">
                      <div className="w-26 text-right pl-5 text-zinc-400 text-xl  flex flex-col gap-2 ">
                        <p>Username :</p>
                        <p>Email :</p>
                        <p>Phone : </p>
                        <p>Website : </p>
                      </div>
                      <div className="pl-2 font-bold text-zinc-600 text-xl  flex flex-col gap-2">
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p> {user.phone}</p>
                        <p> {user.website}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-start  text-lg mt-3">
                    <h2 className="text-xl  text-center text-zinc-400 ">
                      Company
                    </h2>
                    <div className="flex gap-3 mt-2">
                      <div className="w-26 text-right text-zinc-400 text-xl  flex flex-col gap-3 ">
                        <p>Name :</p>
                        <p>Catchphrase :</p>
                        <p>BS : </p>
                      </div>
                      <div className=" font-bold text-zinc-600 flex gap-3 flex-col">
                        <p>{user.company.name}</p>
                        <p>{user.company.catchPhrase}</p>
                        <p>{user.company.bs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{ width: "50%", marginRight: "2rem" }}>
                <h1 className="text-xl text-zinc-400 ">Address:</h1>
                <div className="flex mt-2">
                  <div className="w-26 text-right pl-5 text-zinc-400 text-xl  flex flex-col gap-2 ">
                    <p>Street :</p>
                    <p>Suite :</p>
                    <p>City : </p>
                    <p>Zipcode : </p>
                  </div>
                  <div className="pl-2 font-bold text-zinc-600 text-xl  flex flex-col gap-2">
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p> {user.address.city}</p>
                    <p> {user.address.zipcode}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="./src/assets/Images/map.png"
                    alt="Profile"
                    className=" rounded-3xl items-center mt-5"
                  />
                </div>
                <div className="flex mt-2 float-right">
                  <p className="w-26 text-right pl-5 text-zinc-400 text-sm">
                    Lat:
                  </p>
                  <p className="pl-2 font-bold text-zinc-600 text-sm">
                    -37.3159
                  </p>
                  <p className="w-26 text-right pl-5 text-zinc-400 text-sm">
                    Long:
                  </p>
                  <p className="pl-2 font-bold text-zinc-600 text-sm">
                    81.1496
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
