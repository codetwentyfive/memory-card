import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Card from "./components/Cards";
import Main from "./components/main";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  function onClick(){

  }
  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <Main cards={cards}/>
    </div>
  );
}

export default App;
