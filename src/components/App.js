import React from 'react';
import { Route, Switch } from 'react-router';
//* Components
import Container from './Container';
import MoviesPageView from '../views/MoviesPageView';
import MovieDetailsPage from '../views/MovieDetailPage';
import Cast from '../views/CastView';
import Review from '../views/Review';
import Header from './Header';
//* Views
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView/NotFoundView';

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route exact path="/movies">
          <MoviesPageView />
        </Route>

        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/">
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
