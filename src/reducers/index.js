import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import counterKeyReducer from './counter-key-reducer';


export default combineReducers({
    counterKey: counterKeyReducer,
    counters: counterReducer
});


// counter: counterReducer,
