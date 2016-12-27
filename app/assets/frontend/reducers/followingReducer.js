import * as types from '../constants/actionTypes';

export default function followingReducer(state = {
  isFetching: false,
  users: [],
}, action) {
  switch (action.type) {
    case types.RETRIEVE_FOLLOWING_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RETRIEVE_FOLLOWING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        users: [
          ...state.users,
          ...action.users,
        ],
      });
    default:
      return state;
  }
}
