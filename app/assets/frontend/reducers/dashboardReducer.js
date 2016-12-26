import * as types from '../actions/actionTypes';

export default function dashboardReducer(state = {
  page: '' }, action) {
  switch (action.type) {
    case types.SHOW_HOME:
      return Object.assign({}, state, { page: 'home' });
    case types.SHOW_MESSAGES:
      return Object.assign({}, state, { page: 'messages' });
    case types.SHOW_SUPPORT:
      return Object.assign({}, state, { page: 'support' });
    case types.SHOW_ABOUT:
      return Object.assign({}, state, { page: 'about' });
    default:
      return state;
  }
}
