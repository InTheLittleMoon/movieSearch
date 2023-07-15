import React, { useEffect } from "react";
import "./MovieInfoContainer.css";

export default function MovieInfoContainer({ chosenMovie }) {
  //title
  //release date(year)/ rating / length of time of movie
  //director
  //writer
  //actors/stars
  //potential awards
  //synopsis

  useEffect(() => {
    console.log(chosenMovie);
  }, [chosenMovie]);

  useEffect(() => {
    console.log(chosenMovie);
  }, [chosenMovie]);
  return (
    <div className="movie-info-container">
      <h1>{chosenMovie.title}</h1>
      <div className="titleInfo">
        <span>{chosenMovie.release_date}</span>
      </div>
    </div>
  );
}
