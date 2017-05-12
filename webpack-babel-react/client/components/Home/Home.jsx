import React, { PropTypes } from 'react';
import './style.css';

// Components
import Header from './Header';
import Search from './Search';

const Home = ({ fetchMovieData, isFetching }) => (
  <div className="text-center">
    <Header />
    <hr />
    <div className="col-md-4 col-md-offset-4 col-sm-12">
      <div className="text-center">
        <Search
          fetchMovieData={fetchMovieData}
        />
        { !isFetching ?
          ''
          : 'loading...' }
      </div>
    </div>
  </div>
);

Home.propTypes = {
  fetchMovieData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Home;
