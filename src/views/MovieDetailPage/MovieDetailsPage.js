import React, { useEffect, useState } from 'react';
import { useRouteMatch, Route, NavLink, useParams, Switch } from 'react-router';
import { fetchByIdMovies } from 'services/movieAPI';
import CastView from 'views/CastView';
import Review from 'views/Review';
import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { match, url, path } = useRouteMatch();
  const { movieId } = useParams();

  // useEffect(() => {
  //   fetchByIdMovies(movieId).then(setMovie);
  // }, [movieId]);

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  const fetchMovieById = async () => {
    setLoading(true);
    try {
      const resultData = await fetchByIdMovies(movieId);
      setMovie(resultData.data);
      setLoading(false);
      console.log(movie);
    } catch (error) {
      console.log(error.resultData);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.InfoContainer}>
        <div>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie for you"
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/w500//AoevYJSVtg15hntg8SYwWm2k3hP.jpg`}
            alt="Movie for you"
          /> */}
          {/* </div>
        <div>
          <h2 className={style.Title}>{movie.original_title}</h2>
          <p className={style.Text}>User score : {movie.vote_average * 10}%</p>
          <h3>Overview:</h3>
          <p className={style.Text}>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul className={style.Text}>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>  */}
        </div>
      </div>

      <Route path={`${path}/cast`}>
        <CastView movieId={movieId} />
      </Route>

      <Route path={`${path}/reviews`}>
        <Review movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
