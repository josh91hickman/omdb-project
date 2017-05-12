import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import movies from './omdb';
import movie from './imdb';


const rootReducer = combineReducers({
  routing,
  movies,
  movie,
});

export default rootReducer;
