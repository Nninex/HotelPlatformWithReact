import React from "react";

function RoomFilter({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="roomFilter">Filter by Room Type:</label>
      <input
        type="text"
        id="roomFilter"
        className="form-control"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter room type"
      />
    </div>
  );
}

export default RoomFilter;
