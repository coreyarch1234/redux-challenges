import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY} from '../actions/index';


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state += 1;

    case DECREMENT:
      return state -= 1;

    case RESET_COUNTER:
      return 0;

    case INCREMENT_BY:
        return state += action.payload;
        
    default:
      return state;
  }
}

export default counterReducer;
