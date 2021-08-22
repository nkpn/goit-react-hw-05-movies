import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import style from './MovieDetailsPage.module.css';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';
import { fetchByIdMovies } from 'services/movieAPI';

const Review = lazy(() =>
  import('views/Review' /* webpackChunkName: Reviews */),
);
const CastView = lazy(() =>
  import('views/CastView' /* webpackChunkName: Cast View */),
);

const MovieDetailsPage = onClick => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await fetchByIdMovies(movieId);
        setLoading(false);
        setMovie(response.data);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  const onBack = event => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button className="ui button" onClick={onBack}>
        Back
      </button>
      {loading && <CustomLoader />}
      {movie && (
        <>
          <div className={style.InfoContainer}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Movie for you"
              />
            </div>
            <div>
              <h2 className={style.Title}>{movie.original_title}</h2>
              <p className={style.Text}>
                User score : {movie.vote_average * 10}%
              </p>
              <h3>Overview:</h3>
              <p className={style.Text}>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul className={style.Text}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <hr></hr>
              <nav className={style.Navigation}>
                <NavLink
                  to={`${match.url}/cast`}
                  className={style.link}
                  activeClassName={style.activeLink}
                >
                  Cast
                </NavLink>

                <NavLink
                  to={`${match.url}/review`}
                  className={style.link}
                  activeClassName={style.activeLink}
                >
                  Review
                </NavLink>
              </nav>
            </div>
          </div>
          <hr></hr>
        </>
      )}
      <Suspense fallback={CustomLoader}>
        <Switch>
          <Route path={`${match.path}/cast`}>
            <CastView />
          </Route>

          <Route path={`${match.path}/review`}>
            <Review />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
