import {combineReducers} from 'redux';
import appReducer from './containers/organisms/AppWrapper/reducer';

export default combineReducers({
  appReducer: appReducer,
});
