import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboard from './dashboardReducer';
import help from './helpReducer';
import helps from './helpsReducer';
import messages from './messagesReducer';
import following from './followingReducer';
import follower from './followerReducer';
import user from './userReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  dashboard,
  follower,
  following,
  help,
  helps,
  messages,
  user,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
