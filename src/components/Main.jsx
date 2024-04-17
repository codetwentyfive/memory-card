import React, { useState, useEffect } from "react";
import "../styles/index.css";
import CardItem from "./CardItem";
import LoseScreen from "./LoseScreen";

const Main = ({ difficulty, score, setScore }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [showLoseScreen, setShowLoseScreen] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("/cards.json");
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  useEffect(() => {
    if (score === 0) {
      // If score reaches zero, show the lose screen
      setShowLoseScreen(true);
    }
  }, [score]);

  const restartGame = () => {
    setScore(0);
    setClickedCards([]);
    setShowLoseScreen(false); // Hide the lose screen when restarting the game
  };

  // function to spawn cards based on difficulty
  const selectCardsByDifficulty = (difficulty) => {
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
  };

  useEffect(() => {
    //shuffle the cards when the component mounts or when the score changes
    shuffleCards();
  }, [score]);

  //function to shuffle the array of cards
  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffledCards = [...prevCards];
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [
          shuffledCards[j],
          shuffledCards[i],
        ];
      }
      return shuffledCards;
    });
  };
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

  //select the subset of cards based on the difficulty
  const displayedCards = selectCardsByDifficulty(difficulty);

  return (
    <div className="main">
      {showLoseScreen && <LoseScreen restartGame={restartGame} />}
      {displayedCards.map((card, index) => (
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
