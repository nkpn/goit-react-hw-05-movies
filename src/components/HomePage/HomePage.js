import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchByTrending } from 'services/movieAPI';
import style from './HomePage.module.css';

function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchByTrending().then(setFilms);
  }, []);

  return <></>;
}

export default HomePage;
