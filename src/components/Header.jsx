import React from 'react';
import '../styles/Header.css';

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <div>Memory Game</div>
      <p>Score: {score} | High Score: {highScore}</p>
    </div>
  );
};

export default Header;
