import {combineReducers} from 'redux';
import UserReducer from '../containers/User/UserReducer';

export default combineReducers({
    // all reducers
    userData: UserReducer
})