import React, { PropTypes } from 'react';
import './style.css';

// Components
import Header from './Header';
import Search from './Search';

const App = ({ fetchMovieData }) => (
  <div className="text-center">
    <Header />
    <hr />
    <div className="col-md-4 col-md-offset-4 col-sm-12">
      <div className="text-center">
        <Search
          fetchMovieData={fetchMovieData}
        />
      </div>
    </div>
  </div>
);

App.propTypes = {
  fetchMovieData: PropTypes.func.isRequired,
};

export default App;
