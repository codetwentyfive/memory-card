import React from 'react';
import "../styles/DifficultyPopup.css";

const DifficultyPopup = ({ onSelectDifficulty }) => {
  const handleDifficultySelect = (difficulty) => {
    onSelectDifficulty(difficulty);
  };

  return (
    <div className="popup-container">
      <h2>Select Difficulty</h2>
      <button onClick={() => handleDifficultySelect('easy')}>Easy</button>
      <button onClick={() => handleDifficultySelect('intermediate')}>Intermediate</button>
      <button onClick={() => handleDifficultySelect('hard')}>Hard</button>
    </div>
  );
};

export default DifficultyPopup;
