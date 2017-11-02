import { combineReducers } from 'redux';
import counterKeyReducer from './counter-key-reducer';


export default combineReducers({
    counterKey: counterKeyReducer,
});
