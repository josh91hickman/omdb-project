import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../actions/movie';

// components
import App from '../components/App/App';

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
    const { fetchMovies } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <App
              fetchMovieData={fetchMovies}
            />
          </div>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { movies } = state.movies;
  return {
    movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: searchTerm => dispatch(fetchMovieData(searchTerm)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

