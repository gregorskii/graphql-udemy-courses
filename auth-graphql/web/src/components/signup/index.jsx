import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import SignupForm from 'components/signup-form';
import API from 'src/api';

const { signupMutation } = API.mutations;

class Signup extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
  }

  onSignUpSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <section>
        <h2>Sign up</h2>
        <p>Our service provides great things, create an account below.</p>
        <SignupForm onSubmit={this.onSignUpSubmit} />
      </section>
    );
  }
}

export const SignupComponent = Signup;

export default graphql(signupMutation)(Signup);