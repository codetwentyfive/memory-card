import { useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import CardItem from "./CardItem";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

 
  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Main cards={cards} />
    </div>
  );
}

export default App;
