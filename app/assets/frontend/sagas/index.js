import { take, put, call, fork, select } from 'redux-saga/effects';
import loginFlow from './userSaga.js';
import {
  helpFeedsFlow,
  helpSubmitFlow,
  descriptionFieldFlow,
  saveLocationFieldFlow,
  discardLocationFieldFlow } from './helpSaga.js';
import { retrieveMessagesFlow } from './messagesSaga';
import { dashboardMessagesFlow, dashboardHomeFlow, updateSidebarFromURL } from './dashboardSaga';
import { retrieveFollowingFlow } from './followingSaga';

export default function* root() {
  yield [
    fork(retrieveFollowingFlow),
    fork(helpFeedsFlow),
    fork(helpSubmitFlow),
    fork(loginFlow),
    fork(retrieveMessagesFlow),
    fork(descriptionFieldFlow),
    fork(saveLocationFieldFlow),
    fork(discardLocationFieldFlow),
    fork(dashboardMessagesFlow),
    fork(dashboardHomeFlow),
    fork(updateSidebarFromURL),
  ];
}
