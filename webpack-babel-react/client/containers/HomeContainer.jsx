import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesData } from '../actions/omdb';

// components
import Home from '../components/Home/Home';
import Results from '../components/Results/Results';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { fetchMovies, movies, isFetching } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Home
              fetchMovieData={fetchMovies}
              isFetching={isFetching}
            />
          </div>
        </div>
        <div className="row">
          <hr />
          <Results
            movies={movies}
          />
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { movies, isFetching, results, error } = state.movies;
  return {
    movies,
    results,
    isFetching,
    error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: searchTerm => dispatch(fetchMoviesData(searchTerm)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

