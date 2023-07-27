import React, { useState } from "react";
import classNames from "classnames";
import "./ChatPage.css";

const AnotherComponent = () => {
  return (
    <div
      className="h-96 absolute top-full left-0 bg-white rounded-lg shadow-lg  w-64 transition-transform duration-300 "
      style={{ transform: "translateX(-235%)" }}
    >
      <div className="relative">
        <button className="flex items-center w-64 h-12 bg-blue-600 text-white shadow-lg outline-none focus:outline-none rounded-t-lg px-4">
          <img
            src="./src/assets/Images/images3.jpeg"
            className="object-cover h-8 w-8 rounded-full mr-2"
            alt="User "
          />
          <span>John</span>
        </button>
        <div className="max-h-72 overflow-y-auto selector ">
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Hello
                </div>
                <img
                  src="./src/assets/Images/images2.jpeg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="./src/assets/Images/images3.jpeg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  How are you
                </div>
              </div>
              <div className="flex justify-end mb-4">
                <div>
                  <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam, repudiandae.
                  </div>
                </div>
                <img
                  src="./src/assets/Images/images2.jpeg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="./src/assets/Images/images3.jpeg"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  happy holiday guys!
                </div>
              </div>
            </div>
            <div className="py-5 mb-20">
              <input
                className="w-full bg-gray-500 py-2 px-3 rounded-xl"
                type="text"
                placeholder="Type your message here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setChat(false);
  };
  const UserClick = () => {
    setChat(!chat);
  };

  return (
    <>
      <div
        className={`fixed right-4 md:right-20 mb-12 md:mb-0  ${
          isChatOpen ? "bottom-56" : "bottom-0"
        }`}
      >
        <div className="relative">
          <button
            className={classNames(
              "flex items-center w-64 h-12 bg-blue-600 text-white shadow-lg outline-none focus:outline-none rounded-t-lg px-4",
              {
                "mb-10": isChatOpen,
              }
            )}
            onClick={toggleChat}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-12 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 2H3a2 2 0 00-2 2v12a2 2 0 002 2h7l4 4 4-4h1a2 2 0 002-2V4a2 2 0 00-2-2z"
              />
            </svg>

            <span className="text-xl ">Chats</span>
          </button>

          <div
            className={classNames(
              "absolute top-full right-0 bg-white rounded-lg shadow-lg p-1 w-64 transition-transform duration-300",
              {
                hidden: !isChatOpen,
                "translate-y-full": !isChatOpen,
                "translate-y-0": isChatOpen,
              }
            )}
          >
            <div className="max-h-72 overflow-y-auto selector ">
              <div
                className="flex items-center py-2 cursor-pointer"
                onClick={UserClick}
              >
                <img
                  src="./src/assets/Images/images3.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 1"
                />
                <span>John</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images1.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 2"
                />
                <span>Alex</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images2.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 3"
                />
                <span>Leena</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images3.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 4"
                />
                <span>Faris</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images1.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 5"
                />
                <span>Ajay</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images2.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 6"
                />
                <span>Rahul</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images3.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 7"
                />
                <span>Abraham</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images1.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 8"
                />
                <span>Reena</span>
              </div>
              <div className="flex items-center py-2">
                <img
                  src="./src/assets/Images/images1.jpeg"
                  className="object-cover h-10 w-10 rounded-full mr-2"
                  alt="User 8"
                />
                <span>Elen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {chat && (
        <div className="fixed right-4 md:right-8 mb-12 md:mb-16 bottom-12 md:bottom-48">
          <AnotherComponent />
        </div>
      )}
    </>
  );
};

export default ChatPage;
