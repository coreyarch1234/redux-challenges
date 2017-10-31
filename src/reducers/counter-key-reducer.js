import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY} from '../actions/index';


const counterKeyReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
        // var newState_Increment = state;
        // var keyValue_Increment = action.payload + 1; //because first element is default
        // // console.log('new state ' + newState_Increment.length);
        //
        // if (newState_Increment.length === 1){
        //     newState_Increment.push({
        //         keyValue: keyValue_Increment,
        //         count: 1
        //     });
        //     console.log(newState_Increment);
        //     console.log('length was 1, now is: ' + newState_Increment.length);
        //     return newState_Increment;
        //
        // }else{
        //     newState_Increment[keyValue_Increment].count += 1
        //     console.log(newState_Increment);
        //     console.log('length is bigger than 1, now is: ' + newState_Increment.length);
        //
        //     // return newState_Increment;
        //     return newState_Increment.map((element, index) => {
        //         return element
        //     })
        // }
        // var keyValue = action.payload + 1; //because first element is default
        if (state.length === 1){
            state.push({
                key: action.payload + 1,
                count: 1
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            if (state[action.payload + 1] === undefined){
                state.push({
                    key: action.payload + 1,
                    count: 1
                });
                return state.map((element, index) => {
                    return element
                });
            }else{
                state[action.payload + 1].count += 1
                console.log(state);
                return state.map((element, index) => {
                    return element
                });
            }
            // state[action.payload + 1].count += 1
            // console.log(state);
            // return state.map((element, index) => {
            //     return element
            // });
        }

    case DECREMENT:
        // var keyValue = action.payload + 1;
        if (state.length === 1){
            state.push({
                key: action.payload + 1,
                count: -1
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[action.payload + 1].count -= 1
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    case RESET_COUNTER:
        // var keyValue = action.payload + 1;
        if (state.length === 1){
            state.push({
                key: action.payload + 1,
                count: 0
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[action.payload + 1].count = 0
            console.log(state);
            return state.map((element, index) => {
                return element
            })
        }

    case INCREMENT_BY:
        // var keyValue = action.payload.keyValue + 1;
        if (state.length === 1){
            state.push({
                key: action.payload.keyValue + 1,
                count: action.payload.amount
            });
            console.log(state);
            return state.map((element, index) => {
                return element
            })

        }else{
            state[action.payload.keyValue + 1].count += action.payload.amount
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


// duplicate file and create a counterkeyValueReducer that takes in a state that is an
// object with a keyValue and a counter from the actions payload keyValue (for each action).
// And in the reducer, return an object with that same keyValue, but the counter is incremented.
// And then include this in the combineReducer
//
// And then in App.js, include the component with a specific keyValue number.
// And then in the counter.js, display the specific counter by keyValue {this.props.counterArray[this.props.keyValue].counter}
// You can also make the the state an object like, counterObject = {
//     keyValue: ...
//     counter: ...
// }
// so that you can display with {this.props.counterObject.this.props.keyValue.counter}
//
// Now you can display components with their counters by the keyValue
