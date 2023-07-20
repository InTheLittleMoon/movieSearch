import React, { useEffect, useState } from "react";
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
  const [inputVal, setInputVal] = useState("");

  const updateSearchInput = (event) => {
    setInputVal(event.target.value);
    return;
  };

  const resetInput = () => {
    setInputVal("");
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <img alt="searchIcon" src={searchIcon} />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            resetInput();
          }}
        >
          <input
            type="text"
            placeholder="Search Movies, Directors, etc."
            value={inputVal}
            onChange={(event) => {
              updateSearchInput(event);
              handleInput(event.target.value);
            }}
          ></input>
        </form>
      </div>
      {movieArray && (
        <SearchBarResults
          movieArray={movieArray}
          resetInput={resetInput}
          handleResultClick={handleResultClick}
        />
      )}
    </div>
  );
}
