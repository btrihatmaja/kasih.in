import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboard from './dashboardReducer';
import help from './helpReducer';
import helps from './helpsReducer';
import messages from './messagesReducer';
import user from './userReducer';


const rootReducer = combineReducers({
  dashboard,
  help,
  helps,
  messages,
  user,
  form: formReducer,
});

export default rootReducer;
