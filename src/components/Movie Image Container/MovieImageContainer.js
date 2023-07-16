import React from "react";
import "./MovieImageContainer.css";

//images
import noImageAvailable from "../../assets/images/No-Image-Placeholder.svg.png";

export default function MovieImageContainer({ chosenMovie }) {
  //base image link
  let imgLink = "https://image.tmdb.org/t/p/original";

  // deals with no poster
  let imageCheck = chosenMovie.poster_path;
  console.log(imgLink, imageCheck);

  // Render nothing if chosenMovie is empty
  if (!chosenMovie || chosenMovie.length === 0) {
    return null;
  }

  return (
    <div className="movie-image-container">
      <img
        className="movie-poster"
        alt="movie-poster"
        src={
          imageCheck !== null
            ? `${imgLink}${chosenMovie.poster_path}`
            : noImageAvailable
        }
      />
    </div>
  );
}
