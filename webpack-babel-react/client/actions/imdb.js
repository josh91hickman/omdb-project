import axios from 'axios';

export const REQUEST_MOVIE_DATA = 'REQUEST_MOVIE_DATA';
export const REQUEST_MOVIE_DATA_ERROR = 'REQUEST_MOVIE_DATA_ERROR';
export const REQUEST_MOVIE_DATA_SUCCESS = 'REQUEST_MOVIE_DATA_SUCCESS';

const requestMovieData = () => (
  {
    type: REQUEST_MOVIE_DATA,
    isFetching: true,
  }
);

const requestMovieDataError = error => (
  {
    type: REQUEST_MOVIE_DATA_ERROR,
    error,
  }
);

const requestMovieDataSuccess = movie => (
  { type: REQUEST_MOVIE_DATA_SUCCESS,
    movie,
  }
);


/* Async thunk to fetch movie data */
export const fetchMovieData = (id) => {
  return (dispatch) => {
    dispatch(requestMovieData());

    axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&r=json`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(requestMovieDataSuccess(response.data));
        }
      })
      .catch(e => dispatch(requestMovieDataError(e)));
  };
};
