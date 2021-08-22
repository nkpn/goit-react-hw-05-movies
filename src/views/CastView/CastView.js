import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';
import { fetchByIdMoviesActors } from 'services/movieAPI';
import style from './CastView.module.css';

const CastView = () => {
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

  return (
    <>
      <h2>Cast:</h2>
      <div className={style.CastContainer}>
        {loading && CustomLoader}
        {cast && (
          <ul className={style.CastList}>
            {cast.map(cast => {
              return (
                <li className={style.CastItem} key={cast.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <div className={style.CastListContainer}>
                    <h3>Character: {cast.character} </h3>
                    <h3>Name: {cast.name} </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default CastView;
