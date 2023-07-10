import React from "react";
import "./MovieImageContainer.css";

//images
import moviePoster from "../../assets/images/temp-movie-poster.jpg";

export default function MovieImageContainer() {
  return (
    <div className="movie-image-container">
      <img className="movie-poster" alt="movie-poster" src={moviePoster} />
    </div>
  );
}
