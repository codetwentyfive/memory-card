import React from "react";
import "../styles/Header.css";

const Header = ({ score, setScore, highScore, setHighscore }) => {
  //highscore tracking
  if (score >= highScore) {
    setHighscore(score);
  }

  return (
    <div className="header">
      <h1>Memory Game</h1>

      <p className="rules">RULES:
        Dont pick the same card twice!</p>
      <div className="scoreboard">
        <p className="scoreDisplay">Score: {score} </p><p className="highscoreDisplay"> High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;
