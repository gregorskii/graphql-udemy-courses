import React from 'react';
import classNames from 'classnames';
import isEmail from 'validator/lib/isEmail';

/* eslint-disable react/prop-types */
export const renderField = (showErrors) => {
  return ({ input, label, type, meta: { touched, error, warning } }) => {
    const classControl = classNames({
      'form-group': true,
      'has-danger': touched && !warning && error !== undefined,
      'has-warning': touched && warning !== undefined
    });

    const classField = classNames({
      'form-control': true,
      'mr-sm-1': true,
      'form-control-danger': touched && !warning && error !== undefined,
      'form-control-warning': touched && warning !== undefined
    });

    const errorMessage = (
      <div className="form-control-feedback">{error || warning}</div>
    );

    const showError = showErrors && touched && (error || warning);

    return (
      <div className={classControl}>
        <input
          {...input}
          type={type}
          className={classField}
          placeholder={label}
        />
        {showError ? errorMessage : null}
      </div>
    );
  };
};
/* eslint-enable react/prop-types */

export const required = (value) => {
  if (value) {
    return undefined;
  }
  return 'Required';
};

export const isEmailValidator = (value) => {
  if (isEmail(value)) {
    return undefined;
  }
  return 'Valid email required';
};

export const passwordMatch = (value, fields) => {
  if (value === fields.password) {
    return undefined;
  }
  return 'Passwords do not match';
};
