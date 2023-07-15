import React from "react";
import "./searchbar.css";

//image imports
import searchIcon from "../../assets/images/search-icon.png";

//components
import SearchBarResults from "../searchbarResults/SearchBarResults";

export default function Searchbar({
  handleInput,
  movieArray,
  handleResultClick,
}) {
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <img alt="searchIcon" src={searchIcon} />
        <input
          type="text"
          placeholder="Search Movies, Directors, etc."
          onChange={(event) => {
            handleInput(event.target.value);
          }}
        ></input>
      </div>
      {movieArray && (
        <SearchBarResults
          movieArray={movieArray}
          handleResultClick={handleResultClick}
        />
      )}
    </div>
  );
}
