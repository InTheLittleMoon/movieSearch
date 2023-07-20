import React, { useEffect } from "react";
import "./MovieInfoContainer.css";

export default function MovieInfoContainer({ chosenMovie }) {
  // Render nothing if chosenMovie is empty
  if (!chosenMovie || chosenMovie.length === 0) {
    return null;
  }

  return (
    <div className="movie-info-container">
      <h1>{chosenMovie.title}</h1>
      <div className="title-info">
        <span>Release Date: {chosenMovie.release_date}</span>
        <span>Runtime: {chosenMovie.runtime}</span>
      </div>
      <div className="title-genres">
        {chosenMovie &&
          chosenMovie.genres &&
          chosenMovie.genres.map((genre) => {
            return <span>{genre.name}</span>;
          })}
      </div>
      <div className="actors">{/* need to find actors variables */}</div>
      <div className="movie-summary">
        <p>{chosenMovie.overview}</p>
      </div>
    </div>
  );
}
