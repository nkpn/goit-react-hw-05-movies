import { Switch, Route } from 'react';
import PropTypes from 'prop-types';

//* Components
import Container from './Container';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailPage';
import Cast from './Cast';
import Review from './Review';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/">
          <MoviesPage />
        </Route>

        <Route path="/">
          <MovieDetailsPage />
        </Route>

        <Route path="/">
          <Cast />
        </Route>

        <Route path="/">
          <Review />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
