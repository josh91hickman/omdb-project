import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import movies from './omdb';


const rootReducer = combineReducers({
  routing,
  movies,
});

export default rootReducer;
