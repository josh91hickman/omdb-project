import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import App from '../components/App/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <App />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

