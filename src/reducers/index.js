import { combineReducers } from 'redux';
import counterKeyReducer from './counter-key-reducer';
import thunkerReducer from './thunker-reducer';


export default combineReducers({
    counterKey: counterKeyReducer,
    thunker: thunkerReducer
});
