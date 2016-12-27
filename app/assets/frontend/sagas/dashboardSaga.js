import * as types from '../constants/actionTypes';
import * as dashboardActions from '../actions/dashboardActions';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as sidebarIndexTypes from '../constants/sidebarIndexTypes';

function* updateURL(action) {
  const { slug } = action;
  yield put(push('/dashboard/' + slug));
}

function* updateSidebar(action) {
  const { sidebarIndex } = action;
  switch (sidebarIndex) {
    case sidebarIndexTypes.HOME:
      yield put(dashboardActions.pageSwitcher(sidebarIndexTypes.HOME));
      break;
    case sidebarIndexTypes.MESSAGES:
      yield put(dashboardActions.pageSwitcher(sidebarIndexTypes.MESSAGES));
      break;
    default:
      yield put(dashboardActions.pageSwitcher(sidebarIndexTypes.HOME));
  }

}

export function* dashboardMessagesFlow() {
  yield takeEvery(types.SHOW_MESSAGES, updateURL);
}

export function* dashboardHomeFlow() {
  yield takeEvery(types.SHOW_HOME, updateURL);
}

export function* updateSidebarFromURL() {
  yield takeEvery(types.DASHBOARD_SIDEBAR_CHANGED, updateSidebar);
}
