import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMoives] = useState([]);
  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl,
          };
        });
        setMoives(transformedMovies);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Something went wrong!");
        throw new Error(error.message);
      });
  }

  let content = <p>No movies found.</p>

  if(isLoadind){
    content = <p>Loading...</p>
  }

  if(movies.length > 0){
    content = <MoviesList movies={movies} />
  }

  if (error){
    content = <p>{error}</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
