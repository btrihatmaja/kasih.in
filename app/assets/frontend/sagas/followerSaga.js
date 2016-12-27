import * as types from '../constants/actionTypes';
import * as followerActions from '../actions/followerActions';
import { api } from '../api/followerApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

function* getFollower() {
  try {
    const users = yield call(api.getFollower);
    yield put(followerActions.getFollowerSuccess(users));
  } catch (e) {
    yield put({ type: types.RETRIEVE_FOLLOWER_FAILURE, message: e.message });
  }
}

export function* retrieveFollowerFlow() {
  yield takeLatest(types.RETRIEVE_FOLLOWER_REQUEST, getFollower);
}
