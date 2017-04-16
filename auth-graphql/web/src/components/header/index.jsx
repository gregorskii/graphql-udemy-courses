import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';

import API from 'src/api';

const { currentUserQuery } = API.queries;

const Header = (props) => {
  console.log(props);
  if (props.loading) {
    return (<nav><div className="nav-wrapper" /></nav>);
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">Home</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {props.user ? null : <li><Link to="/login">Login</Link></li>}
          {props.user ? null : <li><Link to="/signup">Signup</Link></li>}
          {props.user ? <li><Link to="/signout">Signout</Link></li> : null}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.shape()
};

Header.defaultProps = {
  loading: false,
  user: null
};

export const HeaderComponent = Header;

export default compose(
  graphql(currentUserQuery, {
    props: ({ data: { loading, user } }) => ({ user, loading })
  })
)(Header);
