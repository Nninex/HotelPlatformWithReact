import React from 'react';
import RoomCard from './RoomCard';
import './RoomGallery.css';

function RoomGallery({ rooms }) {
  return (
    <div className="room-gallery">
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomGallery;