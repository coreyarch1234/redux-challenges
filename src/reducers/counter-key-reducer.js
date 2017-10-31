import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY} from '../actions/index';


const counterKeyReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
        // var newState_Increment = state;
        // var key_Increment = action.payload + 1; //because first element is default
        // // console.log('new state ' + newState_Increment.length);
        //
        // if (newState_Increment.length === 1){
        //     newState_Increment.push({
        //         key: key_Increment,
        //         count: 1
        //     });
        //     console.log(newState_Increment);
        //     console.log('length was 1, now is: ' + newState_Increment.length);
        //     return newState_Increment;
        //
        // }else{
        //     newState_Increment[key_Increment].count += 1
        //     console.log(newState_Increment);
        //     console.log('length is bigger than 1, now is: ' + newState_Increment.length);
        //
        //     // return newState_Increment;
        //     return newState_Increment.map((element, index) => {
        //         return element
        //     })
        // }
        var key = action.payload + 1; //because first element is default
        if (state.length === 1){
            state.push({
                key: key,
                count: 1
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[key].count += 1
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    case DECREMENT:
        var key = action.payload + 1;
        if (state.length === 1){
            state.push({
                key: key,
                count: -1
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[key].count -= 1
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    case RESET_COUNTER:
        var key = action.payload + 1;
        if (state.length === 1){
            state.push({
                key: key,
                count: 0
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[key].count = 0
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    case INCREMENT_BY:
        var key = action.payload.key + 1;
        if (state.length === 1){
            state.push({
                key: key,
                count: action.payload.amount
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[key].count += action.payload.amount
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    default:
      return [
          {
              key: null,
              count: 0
          }
      ];
  }
}

export default counterKeyReducer;


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
