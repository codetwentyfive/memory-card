import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div className="flex self-center justify-center items-center ">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-[250px] top-0 left-0 relative"
        />

        <h1 className="text-white text-4xl font-bold"> Memory Game</h1>
      </div>

      <div className="eyeImg">.</div>
      <div className="scoreboard">
        <p className="rules">RULES: Dont pick the same card twice!</p>
        <p className="scoreDisplay">Score: {score} </p>
        <p className="highscoreDisplay"> High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;
