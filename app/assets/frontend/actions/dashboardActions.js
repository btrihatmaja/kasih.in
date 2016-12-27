import * as types from '../constants/actionTypes';
import * as sidebarIndexTypes from '../constants/sidebarIndexTypes';

export function pageSwitcher(index = sidebarIndexTypes.HOME) {
  let payload = {};
  switch (index) {
    case sidebarIndexTypes.HOME:
      payload = {
        type: types.SHOW_HOME,
        sidebarIndex: index,
        slug: 'home',
      };
      break;
    case sidebarIndexTypes.MESSAGES:
      payload = {
        type: types.SHOW_MESSAGES,
        sidebarIndex: index,
        slug: 'messages',
      };
      break;
    case sidebarIndexTypes.SUPPORT:
      payload = {
        type: types.SHOW_SUPPORT,
        sidebarIndex: index,
        slug: 'support',
      };
      break;
    case sidebarIndexTypes.ABOUT:
      payload = {
        type: types.SHOW_ABOUT,
        sidebarIndex: index,
        slug: 'about',
      };
      break;
    default:
      payload = {
        type: '',
        sidebarIndex: index,
      };
  }

  return payload;
}

export function changeDashboardTab(sidebarIndex) {
  return { type: types.DASHBOARD_TAB_CHANGED, sidebarIndex };
}

export function changeDashboardSidebar(sidebarIndex) {
  return { type: types.DASHBOARD_SIDEBAR_CHANGED, sidebarIndex };
}
