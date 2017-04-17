import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import LoginForm from 'components/login-form';
import API from 'src/api';

const { loginMutation } = API.mutations;

class Login extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <p>Our service provides great things, login below.</p>
        <LoginForm onSubmit={this.onLoginSubmit} />
      </section>
    );
  }
}

export const LoginComponent = Login;

export default graphql(loginMutation)(Login);
