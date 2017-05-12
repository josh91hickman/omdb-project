import React from 'react';

const MovieEntry = ({ movie, index }) => {
  console.log(movie, index)
  const { Title, Year, imdbID, Poster } = movie;
  return (
    <div className="movie-result" key={index}>
      <h4 className="text-center">{Title}</h4>( {Year} )
    </div>
  );
};

export default MovieEntry;