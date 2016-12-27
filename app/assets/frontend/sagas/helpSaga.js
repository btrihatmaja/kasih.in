import * as types from '../constants/actionTypes';
import * as helpActions from '../actions/helpActions';
import { api } from '../api/helpApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import { reset, change } from 'redux-form';

function* getHelps() {
  try {
    const helps = yield call(api.getHelps);
    yield put(helpActions.getHelpsFeedSuccess(helps));
  } catch (e) {
    yield put({ type: types.HELPS_FEED_FAILURE, message: e.message });
  }
}

// TODO: There is no API for post so instead we just put the submitted help
// in the state by dispatching HELP_SUBMIT_SUCCESS.
export function* postHelp(action) {
  const { submitted,
    resolve,
    reject } = action;
  if (submitted !== undefined && !isEmpty(submitted)) {
    yield put({
      type: types.HELP_SUBMIT_SUCCESS,
      submitted });
    yield call(resolve);
    // Reset the form after submit is success
    yield put({ type: types.LOCATION_DISCARDED });
    yield put(reset('help'));
  }
}

function* cancelDescriptionModal() {
  yield put(change('help', 'description', ''));
  yield put(helpActions.hideDescriptionModal());
}

function* saveLocation(action) {
  const { marker } = action;
  if (!isEmpty(marker)) {
    yield put(change('help', 'latitude', marker.lat));
    yield put(change('help', 'longitude', marker.lng));
    yield put(helpActions.centerChanged({
      lat: marker.lat,
      lng: marker.lng,
    }));
    yield put(helpActions.hideLocationModal());
  }
}

function* discardLocation() {
  yield put(change('help', 'latitude', ''));
  yield put(change('help', 'longitude', ''));
  yield put(helpActions.hideLocationModal());
}

export function* helpFeedsFlow() {
  yield takeLatest(types.HELPS_FEED_REQUEST, getHelps);
}

export function* descriptionFieldFlow() {
  yield takeEvery(types.CANCEL_DESCRIPTION_MODAL, cancelDescriptionModal);
}

export function* saveLocationFieldFlow() {
  yield takeEvery(types.LOCATION_SAVED, saveLocation);
}

export function* discardLocationFieldFlow() {
  yield takeEvery(types.LOCATION_DISCARDED, discardLocation);
}

export function* helpSubmitFlow() {
  yield takeEvery(types.HELP_SUBMIT, postHelp);
}
