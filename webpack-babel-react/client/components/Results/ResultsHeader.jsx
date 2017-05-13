import React, { PropTypes } from 'react';

const ResultsHeader = ({ moviesCount }) => (
  <div className="results-header text-center">
    <h4 className="text-center">Results:</h4>
    { moviesCount ?
      <div className="text-center">({moviesCount})</div>
      : '' }
  </div>
);

ResultsHeader.propTypes = {
  moviesCount: PropTypes.number.isRequired,
};

export default ResultsHeader;

