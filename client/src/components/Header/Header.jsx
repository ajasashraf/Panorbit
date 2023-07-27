import React, { useEffect, useState } from "react";
import UserPage from "../UserPage/UserPage";
import Modal from "../Modal/Modal";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Header({ item }) {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const userId = location.state;
  const openModal = () => {
    if (!modal) {
      setModal(true);
    }
  };
  const closeModal = () => {
    setModal(false);
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
  }, []);

  return (
    <>
      {data.map((user) => (
        <header
          className="flex items-center justify-between bg-white text-gray-500 border-b border-black pb-2"
          key={user.id}
        >
          <h1 className="text-2xl font-semibold">{item}</h1>
          <div className="flex items-center cursor-pointer ">
            <div className="block mx-auto h-25 sm:mx-0 sm:shrink-0 object-cover  w-11 pr-3">
              <img src={user.profilepicture} className="rounded-full  " />
            </div>
            <div>
              <a onClick={openModal}>
                <h5 className="text-gray-900  text-xl tracking-tight mb-2  py-3  dark:text-black">
                  {user.name}
                </h5>
              </a>
            </div>
          </div>
        </header>
      ))}
      <UserPage item={item} />

      {modal ? <Modal value={data} closeModal={closeModal} /> : null}
    </>
  );
}
