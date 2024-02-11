import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <h1>Memory Game</h1>

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
