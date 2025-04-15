import React from 'react';
import { fetchMovies } from "../controllers/moviesController";

const MoviesList = () => {
  const movies = fetchMovies();

  return (
    <div>
      <h2>🎬 List of Movies</h2>
      <ul>
        {movies.map((movie, idx) => (
          <li key={idx}>{movie.name} - {movie.year}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
