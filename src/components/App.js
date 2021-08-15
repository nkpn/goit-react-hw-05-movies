import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
//* Components
import Container from './Container';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
//* Views
import HomeView from 'views/HomeView';
import NotFoundView from 'views/NotFoundView/NotFoundView';
import MoviesPageView from '../views/MoviesPageView';
import MovieDetailsPage from '../views/MovieDetailPage';

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

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
