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

  const renderErrors = (errors) => {
    if (errors.length) {
      const errorsList = errors.map((error) => {
        return (<p key={error} className="red-text">{error}</p>);
      });

      return (
        <div className="errors">{errorsList}</div>
      );
    }

    return null;
  };

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
      {renderErrors(props.errors)}
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
  passwordConfirm: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string)
};

AuthFormComponent.defaultProps = {
  passwordConfirm: false,
  errors: []
};

const AuthForm = reduxForm({
  form: 'authForm'
})(AuthFormComponent);

export default AuthForm;
