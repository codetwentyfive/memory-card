import React, { useState, useEffect } from 'react';
import "../styles/CardItem.css";


const CardItem = ({ image, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        setImgSrc(image);
      };
      img.src = image;
    };

    loadImage();
  }, [image]);

  return (
    <div className="card">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <img src={imgSrc} alt={`Card of ${title}`} />
      )}
    </div>
  );
};

export default CardItem;