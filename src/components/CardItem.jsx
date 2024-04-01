import React, { useState, useEffect } from "react";
import "../styles/CardItem.css";
import cardBackImage from "../../public/images/cardback.jpg";

const CardItem = ({ image, title, onClick  }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    onClick();

  };

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
    <div className="card-full">
<div className="card-container cursor-pointer" onClick={handleCardClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <img
              className="card-face front-face"
              src={imgSrc}
              alt={`Card of ${title}`}
            />
            <img
              className="card-face back-face"
              src={cardBackImage}
              alt="Card Back"
            />
          </>
        )}
        <div className="card-title">{title}</div>
      </div>
    </div>
        </div>
  );
};

export default CardItem;
