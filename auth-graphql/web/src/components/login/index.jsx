import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import AuthForm from 'components/auth-form';
import API from 'src/api';

const { loginMutation } = API.mutations;

class Login extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.shape({
      history: React.PropTypes.object.isRequired,
    })
  };

  constructor(props) {
    super(props);

    this.onLoginSubmit = this.onLoginSubmit.bind(this);

    this.state = {
      errors: []
    };
  }

  onLoginSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    }).then(() => {
      setTimeout(() => {
        this.context.router.history.push('/dashboard');
      }, 1000);
    }).catch((res) => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <section className="row">
        <h2>Login</h2>
        <p>Our service provides great things, login below.</p>
        <div className="col s6">
          <AuthForm
            errors={this.state.errors}
            onSubmit={this.onLoginSubmit}
            submitText={'Log In'}
          />
        </div>
      </section>
    );
  }
}

export const LoginComponent = Login;

export default graphql(loginMutation)(Login);
