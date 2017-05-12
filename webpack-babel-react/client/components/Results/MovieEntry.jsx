import React from 'react';
import { browserHistory } from 'react-router';

const MovieEntry = ({ movie }) => {
  const { Title, Year, imdbID, Poster } = movie;
  return (
    <div className="movie-result" onClick={() => { browserHistory.push(`/movie/${imdbID}`); }}>
      <h4 className="text-center">{Title}</h4>( {Year} )
    </div>
  );
};

export default MovieEntry;
