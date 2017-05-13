import React, { PropTypes } from 'react';
import './style.css';

// Components
import Header from './Header';
import Search from './Search';

const Home = ({ fetchMovieData, isFetching }) => (
  <div className="text-center">
    <Header />
    <hr />
    <div className="col-md-6 col-md-offset-3 col-sm-12">
      <div className="text-center">
        <Search
          fetchMovieData={fetchMovieData}
        />
        { !isFetching ?
          ''
          : <h3>loading...</h3> }
      </div>
    </div>
  </div>
);

Home.propTypes = {
  fetchMovieData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Home;
