import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="flex flex-row justify-between items-center">
        <div className="flex justify-center items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[20vh] md:h-[20vh]"
          />
          <h1 className="text-white text-2xl md:text-4xl font-bold ">
            Memory Game
          </h1>
        </div>
        <div className="bg-[#b82882] rounded-2xl p-2 flex flex-row items-center">
          <p className="text-white font-bold">Score: {score} </p>
          <span> | </span>
          <p className="font-bold text-white"> High Score: {highScore}</p>
        </div>
      </div>
      <div className="eyeImg">.</div>
      <p className="self-center text-white bg-slate-600 rounded-2xl p-2 ">
        RULES: Dont pick the same card twice!
      </p>
    </div>
  );
};

export default Header;
