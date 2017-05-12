import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../actions/movie';

// components
import App from '../components/App/App';
import Results from '../components/Results/Results';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    const { fetchMovies, movies, isFetching, results } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <App
              fetchMovieData={fetchMovies}
              isFetching={isFetching}
              results={results}
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

AppContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { movies, isFetching, results } = state.movies;
  return {
    movies,
    results,
    isFetching
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: searchTerm => dispatch(fetchMovieData(searchTerm)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

