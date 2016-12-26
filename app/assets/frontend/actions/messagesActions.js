import * as types from './actionTypes';

export function getMessages() {
  return {
    type: types.RETRIEVE_MESSAGES_REQUEST,
  };
}

export function getMessagesSuccess(messages) {
  return {
    type: types.RETRIEVE_MESSAGES_SUCCESS,
    messages,
  };
}

export function getMessagesFailure(error) {
  return {
    type: types.RETRIEVE_MESSAGES_FAILURE,
    error,
  };
}
