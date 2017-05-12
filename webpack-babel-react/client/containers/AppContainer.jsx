import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import App from '../components/App/App';

class AppContainer extends Component {
  constructor() {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <App />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

