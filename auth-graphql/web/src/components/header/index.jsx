/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import API from 'src/api';
import ACTIONS from 'src/actions';

const { currentUserQuery } = API.queries;
const { logout } = ACTIONS;

const Header = (props, context) => {
  const onSignoutClick = (event) => {
    props.logout();

    event.preventDefault();
    context.router.history.push('/signout');
  };

  if (props.loading) {
    return (<nav><div className="nav-wrapper" /></nav>);
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Home</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {props.authenticated ? null : <li><Link to="/login">Login</Link></li>}
          {props.authenticated ? null : <li><Link to="/signup">Signup</Link></li>}
          {props.authenticated ? <li><a onClick={onSignoutClick}>Signout</a></li> : null}
        </ul>
      </div>
    </nav>
  );
};

Header.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
};

Header.propTypes = {
  loading: PropTypes.bool,
  authenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

Header.defaultProps = {
  authenticated: false,
  loading: false
};

export const HeaderComponent = Header;

const mapStateToProps = ({ auth }) => {
  return {
    authenticated: auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout }, dispatch);
};

export default compose(
  graphql(currentUserQuery, {
    props: ({ data: { loading, user } }) => ({ user, loading })
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
