import React, { useState } from "react";
import RoomGallery from "../components/RoomGallery";
import RoomFilter from "../components/RoomFilter";
import RoomSort from "../components/RoomSort";
import SearchField from "../components/SearchField";
import Reservation from "../components/Reservation";
import roomsData from "../data/rooms";
import "./Home.css";

function Home() {
  const [rooms, setRooms] = useState(roomsData);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRooms = rooms.filter(
    (room) =>
      room.type &&
      room.type.toLowerCase().includes(filter.toLowerCase()) &&
      room.name &&
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="reservation-section">
        <Reservation />
        <RoomSort rooms={rooms} setRooms={setRooms} />
        <RoomFilter filter={filter} setFilter={setFilter} />
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="room-gallery-section">
        <RoomGallery rooms={filteredRooms} />
      </div>
    </div>
  );
}

export default Home;
