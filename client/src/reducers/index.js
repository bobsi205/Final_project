import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import summary from './summary';

export default combineReducers({
  alert,
  auth,
  profile,
  summary,
});
