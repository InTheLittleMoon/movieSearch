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
  const [filteredMovieArray, setFilteredMovieArray] = useState([]);

  const handleInput = (query) => {
    if (timer) {
      clearTimeout(timer);
    }
    // will only search after half a second has passed
    setTimer(
      setTimeout(() => {
        setFilteredMovieArray(
          movieArray.filter((movie) => {
            const movieTitle = movie.name.toUpperCase();
            const queryName = query.toUpperCase();
            if (movieTitle.includes(queryName)) {
              return {
                name: movie.name,
              };
            }
          })
        );
      }, 500)
    );
  };

  const movieFetch = async () => {
    //api dock link: "https://developer.themoviedb.org/docs/getting-started"
    //const apiKey = "b43b4108368573ebcb7eca94ea7ee146";
    // const apiReadAccessToken =
    //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDNiNDEwODM2ODU3M2ViY2I3ZWNhOTRlYTdlZTE0NiIsInN1YiI6IjYzNzNiYzIxMDI4NDIwMDBkY2FjNTA2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R142gu9jerOAiqWtH2RLv0ztSzg5OSHYcsbhyRtl-0I";

    let fetchLink =
      "https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=b43b4108368573ebcb7eca94ea7ee146";

    let data = await fetch(fetchLink)
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

  useEffect(() => {
    movieFetch();
  }, []);

  return (
    <div className="main-movie-container">
      <Searchbar handleInput={handleInput} />
      <MovieDataContainer />
    </div>
  );
}

export default App;
