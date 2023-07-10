import React from "react";
import "./movieDataContainer.css";

//components
import MovieImageContainer from "../Movie Image Container/MovieImageContainer";
import MovieInfoContainer from "../Movie Info Container/MovieInfoContainer";

export default function MovieDataContainer() {
  return (
    <div className="data-container">
      <MovieImageContainer />
      <MovieInfoContainer />
    </div>
  );
}
