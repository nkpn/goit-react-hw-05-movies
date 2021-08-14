import React, { useEffect, useState } from 'react';
import { fetchByTrending } from 'services/movieAPI';

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
            return <li key={film.id}>{film.name ? film.name : film.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
