import React from "react";
import "./App.css";

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
