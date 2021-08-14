import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { fetchByTrending } from 'services/movieAPI';
import style from './HomePage.module.css';

function HomePage() {
  const [films, setFilms] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
}

export default HomePage;
