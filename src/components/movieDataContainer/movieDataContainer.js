import React from "react";
import "./movieDataContainer.css";

//components
import MovieImageContainer from "../Movie Image Container/MovieImageContainer";
import MovieInfoContainer from "../Movie Info Container/MovieInfoContainer";

export default function MovieDataContainer({ chosenMovie }) {
  return (
    <div className="data-container">
      <MovieImageContainer chosenMovie={chosenMovie} />
      <MovieInfoContainer chosenMovie={chosenMovie} />
    </div>
  );
}
