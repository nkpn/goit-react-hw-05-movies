import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import CustomLoader from 'components/SpinnerLoader';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import { fetchOnSearch } from 'services/movieAPI';
import style from './MoviesPageView.module.css';

export default function MoviesPageView() {
  const match = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const resultData = await fetchOnSearch(searchQuery);
        setMovies(prevState => [...prevState, ...resultData.data.results]);
        setLoading(false);
      } catch (error) {
        console.log(error.resultData);
        setLoading(false);
      }
    })();
  }, [searchQuery]);

  const handleSubmit = event => {
    setMovies([]);
    setSearchQuery(event);
    history.push({ ...location, search: `by=${event}` });
  };

  const onBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <Container>
        <div className={style.margin}>
          <button onClick={onBack} className="ui button margin">
            Back
          </button>
        </div>

        {loading && <CustomLoader />}

        <Searchbar onSubmit={handleSubmit} />

        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id} className={style.Item}>
                <Link
                  className={style.Link}
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: location, label: 'Back to the list' },
                  }}
                >
                  {movie.name ? movie.name : movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
