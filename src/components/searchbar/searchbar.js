import React from "react";
import "./searchbar.css";

//image imports
import searchIcon from "../../assets/images/search-icon.png";

export default function Searchbar() {
  return (
    <div>
      <div className="searchbar-container">
        <div className="searchbar">
          <img alt="searchIcon" src={searchIcon} />
          <input
            type="text"
            placeholder="Search Movies, Directors, etc."
          ></input>
        </div>
      </div>
    </div>
  );
}
