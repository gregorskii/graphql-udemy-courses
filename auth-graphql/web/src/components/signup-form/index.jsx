import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {
  renderField,
  isEmailValidator,
  required,
  passwordMatch
} from 'components/helpers/forms';

const renderFieldFn = renderField(true);

const SignupFormComponent = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form
      className="signup-form"
      onSubmit={handleSubmit}
    >
      <Field
        name="email"
        type="text"
        label="Email"
        component={renderFieldFn}
        validate={[required, isEmailValidator]}
      />
      <Field
        name="password"
        type="Password"
        label="Password"
        component={renderFieldFn}
        validate={required}
      />
      <Field
        name="password_confirm"
        type="password"
        label="Confirm Password"
        component={renderFieldFn}
        validate={[required, passwordMatch]}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        disabled={pristine || submitting}
      >Sign Up</button>
    </form>
  );
};

SignupFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const SignupForm = reduxForm({
  form: 'signUp'
})(SignupFormComponent);

export default SignupForm;
