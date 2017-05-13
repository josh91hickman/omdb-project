import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import movieShape from '../../utils/movieShape';

const Movie = ({ movie, isFetching }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-center">{ movie.Title }</h1>
        <button className="btn btn-default" onClick={() => browserHistory.push('/')}>
          Back
        </button>
      </div>
      <hr />
      { !isFetching ?
        <div>
          <div className="col-md-6">
            <img src={movie.Poster} />
          </div>
          <div className="col-md-6">
            <h5 className="movie-detail">Rated:</h5> { movie.Rated }
            <br />
            <h5 className="movie-detail-plot">Plot:</h5> { movie.Plot }
            <br />
            <h5 className="movie-detail">Released:</h5> { movie.Released }
            <br />
            <h5 className="movie-detail">Runtime:</h5> { movie.Runtime }
            <br />
            <h5 className="movie-detail">Genre:</h5> { movie.Genre }
            <br />
            <h5 className="movie-detail">Director:</h5> { movie.Director }
            <br />
            <h5 className="movie-detail">Writer:</h5> { movie.Writer }
            <br />
            <h5 className="movie-detail">Language:</h5> { movie.Language }
            <br />
            <h5 className="movie-detail">Awards:</h5> { movie.Awards }
            <br />
            <h5 className="movie-detail">IMDb Rating:</h5> { movie.imdbRating }
          </div>
        </div>
      : <h3>Loading...</h3> }
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape(movieShape),
  isFetching: PropTypes.bool.isRequired,
};

export default Movie;
