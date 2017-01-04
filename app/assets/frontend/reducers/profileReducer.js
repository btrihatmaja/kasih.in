import * as types from '../constants/actionTypes';

export default function profileReducer(state = {
  bio: { isFetching: false, bio: {} },
  stats: { isFetching: false, stats: { 
    peopleHelped: 0, 
    needsResolved: 0,
    helpsPosted: [],
    helpsNeeded: [],
    categoryOfHelps: [],
    categoryOfNeeds: [],
  } },
  feeds: { isFetching: false, feeds: [] },
}, action) {
  switch (action.type) {
    case types.RETRIEVE_PROFILE_BIO_REQUEST:
      return Object.assign({}, state, { bio: { isFetching: true, bio: { avatar: '' } } });
    case types.RETRIEVE_PROFILE_STATS_REQUEST:
      return Object.assign({}, state, { stats: { isFetching: true } });
    case types.RETRIEVE_PROFILE_FEEDS_REQUEST:
      return Object.assign({}, state, { feeds: { isFetching: true, feeds: [] } });
    case types.RETRIEVE_PROFILE_BIO_SUCCESS:
      return Object.assign({}, state, {
        bio: {
          isFetching: false,
          bio: action.bio,
        },
      });
    case types.RETRIEVE_PROFILE_STATS_SUCCESS:
      return Object.assign({}, state, {
        stats: {
          isFetching: false,
          stats: action.stats,
        },
      });
    case types.RETRIEVE_PROFILE_FEEDS_SUCCESS:
      return Object.assign({}, state, {
        feeds: {
          isFetching: false,
          feeds: [
            ...state.feeds,
            ...action.feeds,
          ],
        },
      });
    default:
      return state;
  }
}
