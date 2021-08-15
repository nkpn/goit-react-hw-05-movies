import React, { useEffect, useState } from 'react';
import { useRouteMatch, NavLink } from 'react-router';
import {
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { fetchByIdMovies } from 'services/movieAPI';
import CastView from 'views/CastView';
import Review from 'views/Review';
import style from './MovieDetailsPage.module.css';
import { Button } from 'semantic-ui-react';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { match, url, path } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  const fetchMovieById = async movieId => {
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

  const onBack = event => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <h1>Id: {movieId}</h1>
      <button class="ui button" onClick={onBack}>
        Back
      </button>
      <div className={style.InfoContainer}>
        {/* <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie for you"
          />
        </div>
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
          </ul>
        </div> */}
      </div>

      <Switch>
        <Route path="/movies/:movieId/cast">
          <CastView />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Review />
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
