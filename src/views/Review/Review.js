import React, { useEffect, useState } from 'react';
import style from './Review.module.css';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';
import { useParams } from 'react-router';
import { fetchByIdMoviesReviews } from 'services/movieAPI';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await fetchByIdMoviesReviews(movieId);
        setReviews(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <div className={style.ReviewContainer}>
      {loading && CustomLoader}
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3 className={style.ReviewTitle}>Author: {review.author}</h3>
                <p className={style.ReviewText}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Review;
