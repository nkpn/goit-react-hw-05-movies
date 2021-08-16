import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';
import { fetchByIdMoviesActors } from 'services/movieAPI';
import style from './CastView.module.css';

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      console.log(movieId);
      try {
        const response = await fetchByIdMoviesActors(movieId);
        setLoading(false);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  return <div className={style.CastContainer}></div>;
}
