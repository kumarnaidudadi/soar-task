import React from "react";
import "./Search.css"; // Import CSS for styling

function Search() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for something..."
        className="search-input"
      />
      <img
        src="https://randomuser.me/api/portraits/women/50.jpg"
        alt="Profile"
        className="profile-pic"
      />
    </div>
  );
}

export default Search;
