import React from "react";

function RoomSort({ rooms, setRooms }) {
  const handleSortChange = (e) => {
    const sortedRooms = [...rooms].sort((a, b) => {
      if (e.target.value === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setRooms(sortedRooms);
  };

  return (
    <div className="form-group">
      <label htmlFor="roomSort">Sort by Price:</label>
      <select
        id="roomSort"
        className="form-control"
        onChange={handleSortChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default RoomSort;
