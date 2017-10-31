import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import counterKeyReducer from './counter-key-reducer';


export default combineReducers({
    counter: counterReducer,
    counterKey: counterKeyReducer
});


// counter: counterReducer,
