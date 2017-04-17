import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => {
  const render = (props) => {
    if (authenticated) {
      return (<Component {...props} />);
    }

    return (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    );
  };

  return (
    <Route
      {...rest}
      render={props => render(props)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
  authenticated: PropTypes.bool
};

PrivateRoute.defaultProps = {
  authenticated: false
};

const mapStateToProps = ({ auth }) => {
  return {
    authenticated: auth.authenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
