import React, { PropTypes } from 'react';

import ResultsHeader from './ResultsHeader';
import MoviesList from './MoviesList';

const Results = ({ movies }) => {
  return (
    <div>
      <ResultsHeader />
      <MoviesList
        movies={movies}
      />
    </div>
  );
};

Results.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;
