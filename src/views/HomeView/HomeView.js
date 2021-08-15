import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchByTrending } from 'services/movieAPI';
import style from './HomeView.module.css';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    fetchTrandingmovies();
  }, []);

  const fetchTrandingmovies = async () => {
    setLoading(true);
    try {
      const resultData = await fetchByTrending();
      setMovies(resultData);
      setLoading(false);
    } catch (error) {
      console.log(error.resultData);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Tranding today:</h1>
      {loading && <CustomLoader />}
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li className={style.Item} key={movie.id}>
                <Link
                  className={style.Link}
                  to={`${match.url}movies/${movie.id}`}
                >
                  {movie.name ? movie.name : movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
