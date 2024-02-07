import React, { useState } from 'react';
import Card from '../components/Card/Card';
import '../styles/index.css';

const Main = () => {
  const [cards, setCards] = useState([]);

  // Logic to generate and shuffle cards goes here

  const handleCardClick = (cardIndex) => {
    // Logic to handle card click goes here
  };

  return (
    <div className="main">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default Main;
