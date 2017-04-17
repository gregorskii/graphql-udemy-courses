import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import AuthForm from 'components/auth-form';
import API from 'src/api';

const { signupMutation } = API.mutations;

class Signup extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);

    this.state = {
      errors: []
    };
  }

  onSignUpSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    }).catch((res) => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <section className="row">
        <h2>Sign up</h2>
        <p>Our service provides great things, create an account below.</p>
        <div className="col s6">
          <AuthForm
            errors={this.state.errors}
            onSubmit={this.onSignUpSubmit}
            passwordConfirm
          />
        </div>
      </section>
    );
  }
}

export const SignupComponent = Signup;

export default graphql(signupMutation)(Signup);
