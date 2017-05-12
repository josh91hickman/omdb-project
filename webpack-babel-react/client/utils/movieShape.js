import { PropTypes } from 'react';

const shape = {
  Actors: PropTypes.string,
  Awards: PropTypes.string,
  BoxOffice: PropTypes.string,
  Country: PropTypes.string,
  DVD: PropTypes.string,
  Director: PropTypes.string,
  Genre: PropTypes.string,
  Language: PropTypes.string,
  Metascore: PropTypes.string,
  Plot: PropTypes.string,
  Poster: PropTypes.string,
  Production: PropTypes.string,
  Rated: PropTypes.string,
  Ratings: PropTypes.arrayOf(PropTypes.object),
  Released: PropTypes.string,
  Response: PropTypes.string,
  Runtime: PropTypes.string,
  Title: PropTypes.string,
  Type: PropTypes.string,
  Website: PropTypes.string,
  Writer: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  imdbRating: PropTypes.string,
  imdbVotes: PropTypes.string,
};

export default shape;
