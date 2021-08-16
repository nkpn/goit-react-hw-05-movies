import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '720fdb62fff13ad66b8dd7c6de97ca06';

const fetchByTrending = async () => {
  return await axios
    .get(`${URL}trending/all/day?api_key=${KEY}`)
    .then(res => res.data.results);
};

const fetchByIdMovies = async movieId => {
  return await axios.get(`${URL}movie/${movieId}?api_key=${KEY}`);
};

const fetchByIdMoviesActors = async movieId => {
  return await axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}`);
};

const fetchByIdMoviesReviews = async movieId => {
  return await axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&page=1`,
  );
};

const fetchOnSearch = async search => {
  return await axios.get(
    `${URL}search/movie?api_key=${KEY}&page=1&query=${search}`,
  );
};

export {
  fetchByTrending,
  fetchByIdMovies,
  fetchByIdMoviesActors,
  fetchByIdMoviesReviews,
  fetchOnSearch,
};
