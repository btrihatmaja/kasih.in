import * as types from '../constants/actionTypes';

export function loginSubmit(login = {}) {
  return {
    type: types.LOGIN_SUBMIT,
    values: login.values,
    resolve: login.resolve,
    reject: login.reject,
  };
}

export function loginSubmitSuccess() {
  return {
    type: types.LOGIN_SUBMIT_SUCCESS,
  };
}

export function loginSubmitFailure(error) {
  return {
    type: types.LOGIN_SUBMIT_FAILURE,
    error,
  };
}
