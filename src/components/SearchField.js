import React from "react";

function SearchField({ searchQuery, setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="searchField">Search:</label>
      <input
        type="text"
        id="searchField"
        className="form-control"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for rooms"
      />
    </div>
  );
}
export default SearchField;
