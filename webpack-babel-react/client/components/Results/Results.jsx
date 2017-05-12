import React from 'react';

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

export default Results;