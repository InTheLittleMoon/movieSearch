import React from "react";
import "./App.css";

//I need to be able to search for a movie by name with the movie titles being
//displayed below the search bar with the title, release date, summary, and if
//possible, movie picture.

//components
import Searchbar from "./components/searchbar/searchbar";
import MovieDataContainer from "./components/movieDataContainer/movieDataContainer";

let link = "https://developer.themoviedb.org/docs/getting-started";

function App() {
  return (
    <div className="main-movie-container">
      <Searchbar />
      <MovieDataContainer />
    </div>
  );
}

export default App;
