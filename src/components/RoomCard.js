import React from "react";
import { Link } from "react-router-dom";
import "./RoomCard.css";

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <Link to={`/rooms/${room.id}`}>
        <img src={room.image} alt={room.type} className="room-image" />
      </Link>

      <div className="room-details">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <p>Price: ${room.price} per night</p>
      </div>
    </div>
  );
}

export default RoomCard;
