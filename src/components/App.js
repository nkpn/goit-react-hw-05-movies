import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
//* Components
import Container from './Container';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import CustomLoader from './SpinnerLoader';
//* Views
// import HomeView from 'views/HomeView';
// import NotFoundView from 'views/NotFoundView/NotFoundView';
// import MoviesPageView from '../views/MoviesPageView';
// import MovieDetailsPage from '../views/MovieDetailPage';
const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: HomeView */),
);
const MoviesPageView = lazy(() =>
  import('../views/MoviesPageView' /* webpackChunkName: Moview search page */),
);
const MovieDetailsPage = lazy(() =>
  import('views/MovieDetailPage' /* webpackChunkName: Film details */),
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView/NotFoundView' /* webpackChunkName: 404 */),
);

function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={CustomLoader}>
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
      </Suspense>
    </Container>
  );
}

export default App;
