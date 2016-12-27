import * as types from '../constants/actionTypes';
import * as sidebarIndexTypes from '../constants/sidebarIndexTypes';

export default function dashboardReducer(state = {
  tabIndex: 0, sidebarIndex: sidebarIndexTypes.HOME, slug: 'home' }, action) {
  switch (action.type) {
    case types.SHOW_HOME:
      return Object.assign({}, state, { sidebarIndex: sidebarIndexTypes.HOME, slug: 'home' });
    case types.SHOW_MESSAGES:
      return Object.assign({}, state, { sidebarIndex: sidebarIndexTypes.MESSAGES, slug: 'messages' });
    case types.SHOW_SUPPORT:
      return Object.assign({}, state, { sidebarIndex: sidebarIndexTypes.SUPPORT, slug: 'support' });
    case types.SHOW_ABOUT:
      return Object.assign({}, state, { sidebarIndex: sidebarIndexTypes.ABOUT, slug: 'about' });
    case types.DASHBOARD_TAB_CHANGED:
      return Object.assign({}, state, { tabIndex: action.index });
    case types.DASHBOARD_SIDEBAR_CHANGED:
      return Object.assign({}, state, { sidebarIndex: action.index });
    default:
      return state;
  }
}
