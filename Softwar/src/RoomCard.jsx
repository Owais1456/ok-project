import React from 'react';
import './RoomCard.css'; // Import the CSS file

const RoomCard = ({ imageUrl, title, price, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="room-card cursor-pointer transition-transform transform hover:scale-105"
    >
      <img
        src={imageUrl} 
        alt={title} 
        className="room-card-image"
      />
      <h2 className="room-card-title">{title}</h2>
      <p className="room-card-price">${price}</p>
    </div>
  );
};

export default RoomCard;
