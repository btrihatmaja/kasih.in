import * as types from '../constants/actionTypes';

export function getFollower() {
  return {
    type: types.RETRIEVE_FOLLOWER_REQUEST,
  };
}

export function getFollowerSuccess(users) {
  return {
    type: types.RETRIEVE_FOLLOWER_SUCCESS,
    users,
  };
}

export function getFollowerFailure(error) {
  return {
    type: types.RETRIEVE_FOLLOWER_FAILURE,
    error,
  };
}
