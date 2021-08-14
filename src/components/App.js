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

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesPageView />
        </Route>
        {/* 
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
