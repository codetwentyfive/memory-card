import React, { useState, useEffect } from "react";
import "../styles/index.css";
import CardItem from "./CardItem";

const Main = ({difficulty}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("/cards.json");
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle cards on component mount
  useEffect(() => {
    setCards((prevCards) => shuffleArray([...prevCards]));
  }, []);

  // function to spawn cards based on difficulty
  function spawnCards(difficulty) {
    let numCards = 0;
    switch (difficulty) {
      case "easy":
        numCards = 4;
        break;
      case "intermediate":
        numCards = 8;
        break;
      case "hard":
        numCards = 16;
        break;
      default:
        numCards = 4;
    }
    return cards.slice(0, numCards);
  }
  return (
    <div className="main">
      {spawnCards(difficulty).map((cards, index) => (
        <CardItem key={index} image={cards.image} title={cards.name} />
      ))}
    </div>
  );
};

export default Main;
