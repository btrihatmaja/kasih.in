import * as types from '../actions/actionTypes';

export default function messagesReducer(state = {
  isFetching: false,
  messages: [],
}, action) {
  switch (action.type) {
    case types.RETRIEVE_MESSAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RETRIEVE_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        messages: [
          ...state.messages,
          ...action.messages,
        ],
      });
    default:
      return state;
  }
}
