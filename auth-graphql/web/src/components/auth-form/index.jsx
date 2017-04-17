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

const AuthFormComponent = (props) => {
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
      {props.passwordConfirm ?
        <Field
          name="password_confirm"
          type="password"
          label="Confirm Password"
          component={renderFieldFn}
          validate={[required, passwordMatch]}
        />
      : null}
      <button
        className="btn btn-outline-success"
        type="submit"
        disabled={pristine || submitting}
      >Sign Up</button>
    </form>
  );
};

AuthFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  passwordConfirm: PropTypes.bool
};

AuthFormComponent.defaultProps = {
  passwordConfirm: false
};

const AuthForm = reduxForm({
  form: 'authForm'
})(AuthFormComponent);

export default AuthForm;
