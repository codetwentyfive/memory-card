import React from 'react';
import '../styles/Card.css';

const Card = ({ image,title }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
};

export default Card;
