import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const AppContainer = props => (
  <div>
    { props.children }
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect(null, null)(AppContainer);
