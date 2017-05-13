import * as ActionTypes from '../actions/imdb';

export default function movieReducer(state = {
  movie: {},
  isFetching: false,
  error: null,
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_MOVIE_DATA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_MOVIE_DATA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.REQUEST_MOVIE_DATA_SUCCESS:
      return { ...state, isFetching: false, movie: action.movie };
    default:
      return state;
  }
}
