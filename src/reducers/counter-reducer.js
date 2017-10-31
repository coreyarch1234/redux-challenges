// import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY, NEW_COUNTER} from '../actions/index';
//
//
// const counterReducer = (state = [], action) => {
//   switch (action.type) {
//     case NEW_COUNTER:
//         return [...state, 0]
//
//     case INCREMENT:
//       return state.map((count,index) => {
//           return action.payload === index ? count ++ : count;
//       });
//
//     case DECREMENT:
//       return state -= 1;
//       return state.map((count,index) => {
//           return action.payload === index ? count -- : count;
//       });
//
//     case RESET_COUNTER:
//       return 0;
//
//     case INCREMENT_BY:
//         return state += action.payload;
//
//     default:
//       return [...state, 0];
//   }
// }
//
// export default counterReducer;


// duplicate file and create a counterKeyReducer that takes in a state that is an
// object with a key and a counter from the actions payload key (for each action).
// And in the reducer, return an object with that same key, but the counter is incremented.
// And then include this in the combineReducer
//
// And then in App.js, include the component with a specific key number.
// And then in the counter.js, display the specific counter by key {this.props.counterArray[this.props.key].counter}
// You can also make the the state an object like, counterObject = {
//     key: ...
//     counter: ...
// }
// so that you can display with {this.props.counterObject.this.props.key.counter}
//
// Now you can display components with their counters by the key
