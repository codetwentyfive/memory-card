import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-4">
        <div className="flex justify-center self-center items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[20vh] md:h-[20vh]"
          />
          <h1 className="text-white text-2xl md:text-4xl font-bold ">
            Memory Game
          </h1>
        </div>
        <div className="bg-gradient-to-r from-[#b92880] to-pink-500 rounded-2xl p-2 flex flex-row items-center ">
          <p className="text-white font-semibold">
            Score: <span>{score}</span>{" "}
          </p>
          <span> | </span>
          <p className=" text-white font-semibold">
            {" "}
            High Score: <span>{highScore}</span>{" "}
          </p>
        </div>
      </div>
      <div className="eyeImg">.</div>
 
    </div>
  );
};

export default Header;
