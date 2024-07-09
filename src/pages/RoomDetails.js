import React from "react";
import { useParams } from "react-router-dom";
import rooms from "../data/rooms";

function RoomDetails() {
  const { id } = useParams();
  const roomId = parseInt(id);
  const room = rooms.find((room) => room.id === roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="room-details-page">
      <h2>{room.name}</h2>
      <img src={room.image} alt={room.type} className="room-image" />
      <p>{room.description}</p>
      <p>Price: ${room.price} per night</p>
    </div>
  );
}

export default RoomDetails;
