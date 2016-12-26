import * as types from '../actions/actionTypes';
import * as messagesActions from '../actions/messagesActions';
import { api } from '../api/messagesApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';

function* getMessages() {
  try {
    const messages = yield call(api.getMessages);
    yield put(messagesActions.getMessagesSuccess(messages));
  } catch (e) {
    yield put({ type: types.RETRIEVE_MESSAGES_FAILURE, message: e.message });
  }
}

export function* retrieveMessagesFlow() {
  yield takeLatest(types.RETRIEVE_MESSAGES_REQUEST, getMessages);
}
