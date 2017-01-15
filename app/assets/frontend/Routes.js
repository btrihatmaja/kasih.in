import React, { PropTypes } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import * as auth from './utils/auth';
import AboutPage from './components/about/AboutPage';
import App from './components/App';
import DashboardPage from './components/dashboard/DashboardPage';
import HomeTabs from './components/dashboard/presentation/HomeTabs';
import HomePage from './components/home/HomePage';
import HelpPage from './components/help/HelpPage';
import LoginPage from './components/users/LoginPage';
import MessagesPage from './components/messages/MessagesPage';
import ProfilePage from './components/profile/ProfilePage';
import EditProfilePage from './components/profile/EditProfilePage';
import HelpForm from './components/common/help/HelpForm';
import { changeDashboardTab, changeDashboardSidebar } from './actions/dashboardActions';
import { syncHistoryWithStore } from 'react-router-redux';
import * as sidebarIndexTypes from './constants/sidebarIndexTypes';

const Routes = (props) => {
  const { store } = props;
  const history = syncHistoryWithStore(browserHistory, store);
  const checkAuth = (nextState, replace) => {
    const { user } = store.getState();
    auth.checkAuth(nextState, replace, user.loggedIn);
  };
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={HomePage} />
          <Route path="about" component={AboutPage} />
          <Route path="login" component={LoginPage} />
          <Route path="profile/:username" component={ProfilePage} />
          <Route path="settings/profile" component={EditProfilePage} />
          <Route path="dashboard" component={DashboardPage}>
            <Route 
              path="home" 
              component={HomeTabs} 
              onEnter={() => { store.dispatch(changeDashboardSidebar(sidebarIndexTypes.HOME)); }} />
            <Route 
              path="messages" 
              component={MessagesPage} 
              onEnter={
              () => { store.dispatch(changeDashboardSidebar(sidebarIndexTypes.MESSAGES)); }
              } />
            <Route 
              path="help/new" 
              component={HelpForm} 
              onEnter={() => { store.dispatch(changeDashboardTab(0)); }} />
            <Route 
              path="help" 
              component={HelpPage} 
              onEnter={() => { store.dispatch(changeDashboardTab(1)); }} />
          </Route>

          <Route onEnter={checkAuth} />
        </Route>
      </Router>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
