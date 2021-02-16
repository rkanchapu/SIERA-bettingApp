import { combineReducers } from 'redux';
import mainReducer from './main';
import eventsReducer from './events';

export default combineReducers({
  mainReducer,
  eventsReducer
});
