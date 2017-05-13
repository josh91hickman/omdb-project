import * as ActionTypes from '../actions/omdb';

export default function moviesReducer(state = {
  movies: [],
  isFetching: false,
  results: 0,
  error: null,
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_MOVIES_DATA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_MOVIES_DATA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.REQUEST_MOVIES_DATA_SUCCESS:
      return { ...state, isFetching: false, movies: action.movies, results: action.results };
    default:
      return state;
  }
}
