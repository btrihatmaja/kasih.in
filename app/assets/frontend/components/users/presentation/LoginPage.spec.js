import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage.js'; 
import sinon from 'sinon';
import Checkbox from 'material-ui/Checkbox';
import CircularProgress from 'material-ui/CircularProgress';

describe('Login Page', () => {
  let subject = null;
  let submitting;
  let touched; 
  let error;
  let resetForm;
  let onSave; 
  let onSaveResponse;

  beforeEach(() => {
    submitting = false;
    touched = false;
    error = null;
    resetForm = sinon.spy();
    onSaveResponse = Promise.resolve();
    onSave = sinon.stub();
    onSave.returns(onSaveResponse);
  });
  const buildSubject = () => {
    const props = {
      onSave,
      submitting,
      // The real redux form has many properties for each field,
      // including onChange and onBlur handlers. We only need to provide
      // the ones that will change the rendered output.
      fields: {
        username: {
          value: '',
          touched,
          error,
        },
        password: {
          value: '',
          touched,
          error,
        },
        rememberMe: {
          value: false,
        },
      },
      handleSubmit: fn => fn,
      resetForm,
    };
    return shallow(<LoginPage {...props} />);
  };

  // The login form has to have these fields 
  it('has username input', () => {
    subject = buildSubject();
    expect(subject.find('#username')
           .find('[type="text"]')
           .length).toEqual(1);
  });
  it('has password input', () => {
    subject = buildSubject();
    expect(subject.find('#password')
           .find('[type="password"]')
           .length).toEqual(1);
  });
  it('has remember me checkbox', () => {
    subject = buildSubject();
    expect(subject.find(Checkbox)
           .find('#remember-me')
           .length).toEqual(1);
  });
  it('has forget password link', () => {
    subject = buildSubject();
    expect(subject.find('a')
           .find('#forget-password')
           .length).toEqual(1);
  });
  it('has sign up link', () => {
    subject = buildSubject();
    expect(subject.find('a')
           .find('#sign-up')
           .length).toEqual(1);
  });
  it('displays loading icon when trying to login', () => {
    submitting = true;
    subject = buildSubject();
    expect(subject.find(CircularProgress)
      .length).toEqual(1);
  });
  it('displays error message');
  it('redirects to main page after successfully login');
});

