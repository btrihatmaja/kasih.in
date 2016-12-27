import * as types from '../constants/actionTypes';

export default function helpsReducer(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case types.HELPS_FEED_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.HELPS_FEED_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [
          ...state.items,
          ...action.items,
        ],
      });
    default:
      return state;
  }
}
