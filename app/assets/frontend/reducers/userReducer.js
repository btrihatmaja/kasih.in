import * as types from '../constants/actionTypes';

export default function userReducer(state = {
  loggedIn: false,
  username: '' }, action) {
  switch (action.type) {
    case types.LOGIN_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        username: action.username,
      });
    default:
      return state;
  }
}
