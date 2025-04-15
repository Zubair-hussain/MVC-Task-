import { getMovies } from '../model/moviesModel';

export const fetchMovies = () => {
  return getMovies();
};
