import * as types from '../constants/actionTypes';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import { forwardTo } from '../utils/auth';

function* login(action) {
  const {
      values,
      resolve,
      reject,
  } = action;
  if (!['john'].includes(values.username)) {
    yield call(
      reject,
      {
        username: 'User does not exist',
        _error: 'Login failed!',
      });
  } else if (values.password !== 'snow') {
    yield call(
      reject,
      {
        password: 'Wrong password',
        _error: 'Login failed!',
      });
  } else {
    yield call(resolve);
    yield put({
      type: types.LOGIN_SUBMIT_SUCCESS,
      username: values.username });
    yield call(forwardTo, '/dashboard');
  }
}

function* loginFlow() {
  takeEvery(types.LOGIN_SUBMIT, login);
}

export default loginFlow;
