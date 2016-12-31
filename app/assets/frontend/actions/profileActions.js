import * as types from '../constants/actionTypes';

export function getProfileBio(username) {
  return {
    type: types.RETRIEVE_PROFILE_BIO_REQUEST,
    username,
  };
}


export function getProfileBioSuccess(bio) {
  return {
    type: types.RETRIEVE_PROFILE_BIO_SUCCESS,
    bio,
  };
}

export function getProfileBioFailure(error) {
  return {
    type: types.RETRIEVE_PROFILE_BIO_FAILURE,
    error,
  };
}


export function getProfileFeeds(username) {
  return {
    type: types.RETRIEVE_PROFILE_FEEDS_REQUEST,
    username,
  };
}

export function getProfileFeedsSuccess(feeds) {
  return {
    type: types.RETRIEVE_PROFILE_FEEDS_SUCCESS,
    feeds,
  };
}

export function getProfileFeedsFailure(error) {
  return {
    type: types.RETRIEVE_PROFILE_FEEDS_FAILURE,
    error,
  };
}

export function getProfileStats(username) {
  return {
    type: types.RETRIEVE_PROFILE_STATS_REQUEST,
    username,
  };
}

export function getProfileStatsSuccess(stats) {
  return {
    type: types.RETRIEVE_PROFILE_STATS_SUCCESS,
    stats,
  };
}


export function getProfileStatsFailure(error) {
  return {
    type: types.RETRIEVE_PROFILE_STATS_FAILURE,
    error,
  };
}
