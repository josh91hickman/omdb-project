import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../actions/imdb';
import movieShape from '../utils/movieShape';

// components
import Movie from '../components/Movie/Movie';

class MovieContainer extends Component {
  componentDidMount() {
    const { fetchMovie } = this.props;
    const { id } = this.props.params;
    fetchMovie(id);
  }
  render() {
    const { isFetching, movie, error } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            { !isFetching ?
              <Movie movie={movie} />
              : '...loading' }
          </div>
        </div>
      </div>
    );
  }
}

MovieContainer.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movie: PropTypes.shape(movieShape).isRequired,
  params: PropTypes.shape({ id: PropTypes.string }),
};

const mapStateToProps = (state) => {
  const { isFetching, movie, error } = state.movie;
  return {
    isFetching,
    movie,
    error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: id => dispatch(fetchMovieData(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

