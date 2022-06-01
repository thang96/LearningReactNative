import {combineReducers} from 'redux';
import info from './reducers/InfoReducers';
import authReducer from './reducers/ReducerAuth';

export default combineReducers({info, auth: authReducer});
