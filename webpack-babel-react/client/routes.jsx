import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import MovieContainer from './containers/MovieContainer';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path="/movie/:id" component={MovieContainer} />
  </Route>
);
