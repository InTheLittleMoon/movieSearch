import React from "react";
import "./searchbar.css";

//image imports
import searchIcon from "../../assets/images/search-icon.png";

export default function Searchbar({ handleInput }) {
  return (
    <div>
      <div className="searchbar-container">
        <div className="searchbar">
          <img alt="searchIcon" src={searchIcon} />
          <input
            type="text"
            placeholder="Search Movies, Directors, etc."
            onChange={(event) => {
              handleInput(event);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
