import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Modal({ closeModal }) {
  const location = useLocation();
  const userId = location.state;
  const [data, setData] = useState([]);

  const handleClose = (e) => {
    if (e.target.id === "container") {
      closeModal();
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://panorbit.in/api/users.json");
      const value = response.data.users.filter((data) => {
        return data.id === userId;
      });
      setData(value);
    };
    fetchData();
  });

  return (
    <>
      {data.map((user) => (
        <div
          id="container"
          onClick={handleClose}
          className="fixed inset-0 flex justify-end h-96"
          style={{ marginTop: "6rem" }}
        >
          <div className="flex justify-center rounded-3xl mr-20">
            <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-white dark:border-white">
              <div className="flex justify-center">
                <a href="#">
                  <img
                    className="w-40 h-40 rounded-full"
                    src={user.profilepicture}
                    alt=""
                  />
                </a>
              </div>
              <div className="">
                <div className="flex justify-center border-b border-gray-400">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-600 dark:text-zinc">
                      {user.name}
                    </h5>
                    <h6 className="text-zinc-400 text-center">
                      {user.username}
                    </h6>
                  </a>
                </div>
                <div className="overflow-y-auto selector">
                  <div className="bg-white">
                    <div className="flex items-center bg-white border-b-2 mr-10 ml-10">
                      <div className="block mx-auto ml-6 h-25 sm:mx-0 sm:shrink-0 object-cover  w-[35px]">
                        <img src="" className="rounded-full ml-8 " />
                      </div>
                      <div>
                        <a>
                          <h5 className="text-gray-900  text-xl tracking-tight mb-2  py-3 px-14 dark:text-black">
                            Name
                          </h5>
                        </a>
                      </div>
                      <div className="border-b-2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-5">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
