import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import CardItem from './CardItem';

const Main = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch('/cards.json');
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle cards on component mount
  useEffect(() => {
    setCards((prevCards) => shuffleArray([...prevCards]));
  }, []);

  return (
    <div className="main">
      {cards.map((cards, index) => (
        <CardItem
          key={index}
          image={cards.image}
          title={cards.name} // Assuming your JSON has a "name" field for the card title
        />
      ))}
    </div>
  );
};

export default Main;
