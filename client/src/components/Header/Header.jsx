import React from "react";
import UserPage from "../UserPage/UserPage";

export default function Header({ item }) {
  return (
    <>
      <header className="flex items-center justify-between bg-white text-gray-500 border-b border-black">
        <h1 className="text-2xl font-semibold">{item}</h1>
        <div className="flex items-center ">
          <div className="block mx-auto h-25 sm:mx-0 sm:shrink-0 object-cover  w-[35px] pr-3">
            <img
              src="https://picsum.photos/id/237/200/300"
              className="rounded-full  "
            />
          </div>
          <div>
            <a href="#">
              <h5 className="text-gray-900  text-xl tracking-tight mb-2  py-3  dark:text-black">
                Ajas Ashraf
              </h5>
            </a>
          </div>
        </div>
      </header>
      <UserPage item={item} />
    </>
  );
}
