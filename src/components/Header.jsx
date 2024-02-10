import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="scoreboard">
        <p>
          Score: {score} | High Score: {highScore}
        </p>
      </div>
    </div>
  );
};

export default Header;
