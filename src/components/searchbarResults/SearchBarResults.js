import React from "react";
import "./SearchBarResults.css";

export default function SearchBarResults({ movieArray }) {
  let imgLink = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="results-container">
      {movieArray.map((movie) => {
        return (
          <div className="movie-result">
            <img alt="movie-icon" src={`${imgLink}${movie.poster_path}`} />
            <span>{movie.title}</span>
          </div>
        );
      })}
    </div>
  );
}
