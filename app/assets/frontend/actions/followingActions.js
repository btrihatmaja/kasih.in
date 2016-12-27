import * as types from '../constants/actionTypes';

export function getFollowing() {
  return {
    type: types.RETRIEVE_FOLLOWING_REQUEST,
  };
}

export function getFollowingSuccess(users) {
  return {
    type: types.RETRIEVE_FOLLOWING_SUCCESS,
    users,
  };
}

export function getFollowingFailure(error) {
  return {
    type: types.RETRIEVE_FOLLOWING_FAILURE,
    error,
  };
}
