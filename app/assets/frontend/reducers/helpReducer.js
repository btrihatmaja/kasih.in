import * as types from '../constants/actionTypes';

export default function helpReducer(state = {
  center: {},
  descriptionModalIsOpened: false,
  locationModalIsOpened: false,
  locationSaved: false,
  submitting: false,
  submitted: {} }, action) {
  switch (action.type) {
    case types.HELP_SUBMIT:
      return Object.assign({}, state, {
        submitting: true,
        submitted: action.submitted });
    case types.HELP_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        submitting: false,
        submitted: action.submitted });
    case types.HELP_SUBMIT_FAILED:
      return Object.assign({}, state, { submitting: false });
    case types.SHOW_DESCRIPTION_MODAL:
      return Object.assign({}, state, { descriptionModalIsOpened: true });
    case types.HIDE_DESCRIPTION_MODAL:
      return Object.assign({}, state, { descriptionModalIsOpened: false });
    case types.SHOW_LOCATION_MODAL:
      return Object.assign({}, state, { locationModalIsOpened: true });
    case types.HIDE_LOCATION_MODAL:
      return Object.assign({}, state, { locationModalIsOpened: false });
    case types.CENTER_CHANGED:
      return Object.assign({}, state, { center: action.center });
    case types.MARKER_CHANGED:
      return Object.assign({}, state, { marker: action.marker });
    case types.LOCATION_SAVED:
      return Object.assign({}, state, { locationSaved: true });
    case types.LOCATION_DISCARDED:
      return Object.assign({}, state, { locationSaved: false, marker: state.center });
    default:
      return state;
  }
}
