import axios from 'axios';

export const REQUEST_MOVIE_DATA = 'REQUEST_MOVIE_DATA';
export const REQUEST_MOVIE_DATA_ERROR = 'REQUEST_MOVIE_DATA_ERROR';
export const REQUEST_MOVIE_DATA_SUCCESS = 'REQUEST_MOVIE_DATA_SUCCESS';

const requestMovieData = () => {
  return {
    type: REQUEST_MOVIE_DATA,
    isFetching: true,
  };
};

const requestMovieDataError = (error) => {
  return {
    type: REQUEST_MOVIE_DATA_ERROR,
    error,
  };
};

const requestMovieDataSuccess = (data) => {
  const movies = data.Search;
  const results = data.totalResults;
  return {
    type: REQUEST_MOVIE_DATA_SUCCESS,
    movies,
    results,
  };
};

/* Async thunk to fetch movie data */
export const fetchMovieData = (searchTerm) => {
  return (dispatch) => {
    dispatch(requestMovieData());

    axios.get(`http://www.omdbapi.com/?s=${searchTerm}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(requestMovieDataSuccess(response.data))
        } else {
          dispatch(requestMovieDataError(response.Response));
        }
      })
      .catch(e => dispatch(requestMovieDataError(e)));
  };
};

