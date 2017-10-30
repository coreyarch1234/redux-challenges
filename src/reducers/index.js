import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

export default combineReducers({
    counter: counterReducer
});


/* this is my state
{
counter: 0,
posts: []
}
*/
