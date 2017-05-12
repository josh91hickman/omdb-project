import * as ActionTypes from '../actions/omdb';

export default function movieReducer(state = {
  movies: [],
  isFetching: false,
  results: 0,
  error: null,
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_MOVIE_DATA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_MOVIE_DATA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.REQUEST_MOVIE_DATA_SUCCESS:
      return { ...state, isFetching: false, movies: action.movies, results: action.results };
    default:
      return state;
  }
}
