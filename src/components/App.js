import react from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
//* Components
import Container from './Container';
import HomePage from './HomePage';
import MoviesPage from '../views/MoviesPageView';
import MovieDetailsPage from './MovieDetailPage';
import Cast from './Cast';
import Review from './Review';
//* Views
import HomeView from 'views/HomeView';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        {/* <Route path="/">
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
        </Route> */}
      </Switch>
    </Container>
  );
}

export default App;
