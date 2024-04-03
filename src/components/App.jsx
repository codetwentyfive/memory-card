import { useEffect, useState } from "react";
import DifficultyPopup from "./DifficultyPopup";
import Header from "./Header";
import Main from "./Main";
import "../styles/App.css";
import Footer from "./Footer";
import "tailwindcss/tailwind.css";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [difficulty, setDifficulty] = useState(null);

  const handleSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setShowPopup(false);
  };

  //highscore tracking
  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <div className="title-background"></div>

      <Header
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
      <Main difficulty={difficulty} score={score} setScore={setScore} />

      <Footer />
    </div>
  );
}

export default App;
