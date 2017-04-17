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

  static contextTypes = {
    router: React.PropTypes.shape({
      history: React.PropTypes.object.isRequired,
    })
  };

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
        <h2>Sign up</h2>
        <p>Our service provides great things, create an account below.</p>
        <div className="col s6">
          <AuthForm
            errors={this.state.errors}
            onSubmit={this.onSignUpSubmit}
            submitText={'Sign Up'}
            passwordConfirm
          />
        </div>
      </section>
    );
  }
}

export const SignupComponent = Signup;

export default graphql(signupMutation)(Signup);
