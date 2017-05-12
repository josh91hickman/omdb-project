import React, { PropTypes } from 'react';

import MovieEntry from './MovieEntry';

const MoviesList = ({ movies }) => {
  const movieList = movies.map((movie, index) => {
    return (
      <MovieEntry movie={movie} key={index} />
    );
  });
  return (
    <div className="text-center">
      { movieList }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;