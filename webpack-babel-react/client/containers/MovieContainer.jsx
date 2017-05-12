import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            single movie here
          </div>
        </div>
      </div>
    );
  }
}

MovieContainer.propTypes = {

};

const mapStateToProps = (state) => {

  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

