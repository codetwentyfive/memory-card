import { useEffect, useState } from "react";
import DifficultyPopup from "./DifficultyPopup";
import Header from "./Header";
import Main from "./Main";
import CardItem from "./CardItem";
import "../styles/App.css";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [difficulty, setDifficulty] = useState(null);

  const handleSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <DifficultyPopup onSelectDifficulty={handleSelectDifficulty} />
      )}
      {!showPopup && <Header score={score} highScore={highScore} />}
      {!showPopup && <Main difficulty={difficulty} score={score} setScore={setScore} />}
    </div>
  );
}


export default App;
