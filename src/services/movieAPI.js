import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '720fdb62fff13ad66b8dd7c6de97ca06';
// const KEY = 'de2580cf82fb3c491bffe484bc91ca51';

const fetchByTrending = async () => {
  return await axios
    .get(`${URL}trending/all/day?api_key=${KEY}`)
    .then(res => res.data.results);
};

// async function fetchByTrending() {
//   const response = await fetch(`${URL}trending/all/day?api_key=${KEY}`);
//   return response.json();
// }

async function fetchByIdMovies(movieId) {
  const response = await fetch(`${URL}movie/${movieId}?api_key=${KEY}`);
  return response.json();
}

async function fetchByIdMoviesActors(movieId) {
  const response = await fetch(`${URL}movie/${movieId}/credits?api_key=${KEY}`);
  return response.json();
}

async function fetchByIdMoviesReviews(movieId) {
  const response = await fetch(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&page=1`,
  );
  return response.json();
}

async function fetchOnSearch(search) {
  const response = await fetch(
    `${URL}search/movie?api_key=${KEY}&page=1&query=${search}`,
  );
  return response.json();
}

export {
  fetchByTrending,
  fetchByIdMovies,
  fetchByIdMoviesActors,
  fetchByIdMoviesReviews,
  fetchOnSearch,
};
