import * as types from '../constants/actionTypes';
import * as followingActions from '../actions/followingActions';
import { api } from '../api/followingApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

function* getFollowing() {
  try {
    const users = yield call(api.getFollowing);
    yield put(followingActions.getFollowingSuccess(users));
  } catch (e) {
    yield put({ type: types.RETRIEVE_FOLLOWING_FAILURE, message: e.message });
  }
}

export function* retrieveFollowingFlow() {
  yield takeLatest(types.RETRIEVE_FOLLOWING_REQUEST, getFollowing);
}
