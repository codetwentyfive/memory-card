import React, { useState, useEffect } from "react";
import "../styles/index.css";
import CardItem from "./CardItem";

const Main = ({ difficulty, score, setScore }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("/cards.json");
      const data = await response.json();
      const shuffledData = shuffleArray(data);
      setCards(shuffledData);
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

  //function to handle Card Click
  const handleCardClick = (card) => {
    if (clickedCards.includes(card.name)) {
      //gameover when card is already been clicked
      setScore(0);
      setClickedCards([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevClickedCards) => [...prevClickedCards, card.name]);
    }
  };
  return (
    <div className="main">
      {spawnCards(difficulty).map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          title={card.name}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Main;
