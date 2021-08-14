import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchByTrending } from 'services/movieAPI';
import style from './HomeView.module.css';

export default function HomeView() {
  const [films, setFilms] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrandingFilms();
  }, []);

  const fetchTrandingFilms = async () => {
    try {
      const resultData = await fetchByTrending();
      setFilms(resultData);
    } catch (error) {
      console.log(error.resultData);
    }
  };

  return (
    <div>
      <h1>Tranding today:</h1>
      {films && (
        <ul>
          {films.map(film => {
            return (
              <li className={style.Item} key={film.id}>
                <Link className={style.Link} to={`/${film.id}`}>
                  {film.name ? film.name : film.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
