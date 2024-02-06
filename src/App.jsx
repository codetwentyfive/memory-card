import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
