import React, { useEffect, useState } from "react";
import "./App.css";

//I need to be able to search for a movie by name with the movie titles being
//displayed below the search bar with the title, release date, summary, and if
//possible, movie picture.

//components
import Searchbar from "./components/searchbar/searchbar";
import MovieDataContainer from "./components/movieDataContainer/movieDataContainer";

function App() {
  //held states
  const [timer, setTimer] = useState(null);
  const [movieArray, setMovieArray] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);

  //requires two calls, one for movie titles and one for the data itself using the movie.id
  const movieDataFetch = async (movieID) => {
    const apiKey = "b43b4108368573ebcb7eca94ea7ee146";
    let fetchUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`;

    let data = await fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log("Error in fetch call");
      });
    return data;
  };

  const movieTitleFetch = async (movie) => {
    //api dock link: "https://developer.themoviedb.org/docs/getting-started"

    //not sure if ill need this:
    // const apiReadAccessToken =
    // "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDNiNDEwODM2ODU3M2ViY2I3ZWNhOTRlYTdlZTE0NiIsInN1YiI6IjYzNzNiYzIxMDI4NDIwMDBkY2FjNTA2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R142gu9jerOAiqWtH2RLv0ztSzg5OSHYcsbhyRtl-0I";

    const apiKey = "b43b4108368573ebcb7eca94ea7ee146";
    let fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`;

    let data = await fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieArray(data.results);
      })
      .catch((err) => {
        console.log("Error in fetch call");
      });
  };

  const handleInput = (query) => {
    if (timer) {
      clearTimeout(timer);
    }

    // will only search after a second has passed
    setTimer(
      setTimeout(() => {
        movieTitleFetch(query);
      }, 1000)
    );
  };

  //movie result clicked
  const handleResultClick = async (movieID) => {
    let movie = await movieDataFetch(movieID);
    console.log(movie);
    setChosenMovie(movie);
    setMovieArray([]);
  };

  // useEffect(() => {
  //   movieTitleFetch();
  // }, []);

  return (
    <div className="main-movie-container">
      <Searchbar
        handleInput={handleInput}
        movieArray={movieArray}
        handleResultClick={handleResultClick}
      />
      <MovieDataContainer chosenMovie={chosenMovie} />
    </div>
  );
}

export default App;
