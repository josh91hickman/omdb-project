import axios from 'axios';

export const REQUEST_MOVIES_DATA = 'REQUEST_MOVIES_DATA';
export const REQUEST_MOVIES_DATA_ERROR = 'REQUEST_MOVIES_DATA_ERROR';
export const REQUEST_MOVIES_DATA_SUCCESS = 'REQUEST_MOVIES_DATA_SUCCESS';

const requestMoviesData = () => (
  {
    type: REQUEST_MOVIES_DATA,
    isFetching: true,
  }
);

const requestMoviesDataError = error => (
  {
    type: REQUEST_MOVIES_DATA_ERROR,
    error,
  }
);

const requestMoviesDataSuccess = (data) => {
  const movies = data.Search;
  const results = data.totalResults;
  return {
    type: REQUEST_MOVIES_DATA_SUCCESS,
    movies,
    results,
  };
};

/* Async thunk to fetch movie data */
export const fetchMoviesData = (searchTerm) => {
  return (dispatch) => {
    dispatch(requestMoviesData());

    axios.get(`http://www.omdbapi.com/?s=${searchTerm}`)
      .then((response) => {
        if (response.status === 200 && response.data.Response === 'True') {
          dispatch(requestMoviesDataSuccess(response.data));
        } else {
          dispatch(requestMoviesDataError(response.Response));
        }
      })
      .catch(e => dispatch(requestMoviesDataError(e)));
  };
};

