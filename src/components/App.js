import { Switch, Route } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          {/* <HomePage /> */}
        </Route>

        <Route path="/">{/* <MoviesPage /> */}</Route>

        <Route path="/">{/* <MovieDetailsPage /> */}</Route>

        <Route path="/">{/* <Cast /> */}</Route>

        <Route path="/">{/* <Reviews /> */}</Route>
      </Switch>
    </Container>
  );
}

export default App;
