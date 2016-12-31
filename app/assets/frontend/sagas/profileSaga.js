import * as types from '../constants/actionTypes';
import { api } from '../api/profileApi';
import * as profileActions from '../actions/profileActions';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

function* getBio(action) {
  try {
    const { id } = action;
    const bio = yield call(api.getBio, id); 
    yield put(profileActions.getProfileBioSuccess(bio));
  } catch (e) {
    yield put({ type: types.RETRIEVE_PROFILE_BIO_FAILURE, message: e.message });
  }
}

function* getFeeds() {
  try {
    const feeds = yield call(api.getFeeds); 
    yield put(profileActions.getProfileFeedsSuccess(feeds));
  } catch (e) {
    yield put({ type: types.RETRIEVE_PROFILE_FEEDS_FAILURE, message: e.message });
  }
}

export function* profileBioFlow() {
  yield takeLatest(types.RETRIEVE_PROFILE_BIO_REQUEST, getBio);
}

export function* profileFeedsFlow() {
  yield takeLatest(types.RETRIEVE_PROFILE_FEEDS_REQUEST, getFeeds);
}
