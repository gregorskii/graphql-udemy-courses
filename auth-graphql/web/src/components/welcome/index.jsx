import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ACTIONS from 'actions';
import styles from './welcome.scss';

const { testApi } = ACTIONS;

const Welcome = (props) => {
  // TODO: remove this example API call
  props.testApi();
  return (
    <div className={styles.welcome}>{props.welcomeText}</div>
  );
};

Welcome.propTypes = {
  welcomeText: PropTypes.string,
  testApi: PropTypes.func.isRequired
};

Welcome.defaultProps = {
  welcomeText: 'Welcome!'
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ testApi }, dispatch);
};

export const WelcomeComponent = Welcome;

export default connect(null, mapDispatchToProps)(Welcome);
