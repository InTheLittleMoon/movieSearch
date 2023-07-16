import React from "react";
import "./SearchBarResults.css";

//images
import noImageAvailable from "../../assets/images/No-Image-Placeholder.svg.png";

export default function SearchBarResults({ movieArray, handleResultClick }) {
  //base image link
  let imgLink = "https://image.tmdb.org/t/p/original/";

  // Render nothing if movieArray is empty
  if (!movieArray || movieArray.length === 0) {
    return null;
  }

  return (
    <div className="results-container overlapping-div">
      {movieArray.map((movie) => {
        let imageCheck = movie.poster_path;

        return (
          <div
            className="movie-result"
            onClick={() => {
              handleResultClick(movie.id);
            }}
          >
            <img
              alt="movie-icon"
              src={
                imageCheck !== null
                  ? `${imgLink}${movie.poster_path}`
                  : noImageAvailable
              }
            />
            <span>{movie.title}</span>
          </div>
        );
      })}
    </div>
  );
}
