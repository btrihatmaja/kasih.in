import * as types from '../constants/actionTypes';

export function helpSubmit(promise = {}) {
  return {
    type: types.HELP_SUBMIT,
    submitted: promise.submitValues,
    reject: promise.reject,
    resolve: promise.resolve,
  };
}

export function centerChanged(center = {}) {
  return {
    type: types.CENTER_CHANGED,
    center,
  };
}

export function markerChanged(marker = {}) {
  return {
    type: types.MARKER_CHANGED,
    marker,
  };
}

export function showDescriptionModal() {
  return {
    type: types.SHOW_DESCRIPTION_MODAL,
  };
}

export function hideDescriptionModal() {
  return {
    type: types.HIDE_DESCRIPTION_MODAL,
  };
}

export function cancelDescriptionModal() {
  return {
    type: types.CANCEL_DESCRIPTION_MODAL,
  };
}

export function showLocationModal() {
  return {
    type: types.SHOW_LOCATION_MODAL,
  };
}

export function hideLocationModal() {
  return {
    type: types.HIDE_LOCATION_MODAL,
  };
}

export function cancelLocationModal() {
  return {
    type: types.CANCEL_LOCATION_MODAL,
  };
}

export function saveLocation(marker) {
  return {
    type: types.LOCATION_SAVED,
    marker,
  };
}

export function discardLocation() {
  return {
    type: types.LOCATION_DISCARDED,
  };
}

export function getHelpsFeed() {
  return {
    type: types.HELPS_FEED_REQUEST,
  };
}

export function getHelpsFeedSuccess(items) {
  return {
    type: types.HELPS_FEED_SUCCESS,
    items,
  };
}

export function getHelpsFeedFailure(error) {
  return {
    type: types.HELPS_FEED_FAILURE,
    error,
  };
}
