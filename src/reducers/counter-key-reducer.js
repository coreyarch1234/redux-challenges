import React, { Component } from 'react';
import Counter from '../components/counter';

import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY, NEW_COUNTER} from '../actions/index';



const counterKeyReducer = (state = [], action) => {
  switch (action.type) {

    case NEW_COUNTER:
      return [...state, counterCreator()];

    case INCREMENT:
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
        }

    case DECREMENT:
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
            if (state[action.payload + 1] === undefined){
                state.push({
                    key: action.payload + 1,
                    count: -1
                });
                return state.map((element, index) => {
                    return element
                });
            }else{
                state[action.payload + 1].count -= 1
                console.log(state);
                return state.map((element, index) => {
                    return element
                });
            }
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
            if (state[action.payload + 1] === undefined){
                state.push({
                    key: action.payload + 1,
                    count: 0
                });
                return state.map((element, index) => {
                    return element
                });
            }else{
                state[action.payload + 1].count = 0
                console.log(state);
                return state.map((element, index) => {
                    return element
                });
            }
        }

    // case INCREMENT_BY:
    //     // var keyValue = action.payload.keyValue + 1;
    //     if (state.length === 1){
    //         state.push({
    //             key: action.payload.keyValue + 1,
    //             count: action.payload.amount
    //         });
    //         console.log(state);
    //         return state.map((element, index) => {
    //             return element
    //         })
    //
    //     }else{
    //         if (state[action.payload + 1] === undefined){
    //             state.push({
    //                 key: action.payload + 1,
    //                 count: action.payload.amount
    //             });
    //             return state.map((element, index) => {
    //                 return element
    //             });
    //         }else{
    //             state[action.payload.keyValue + 1].count += action.payload.amount
    //             console.log(state);
    //             return state.map((element, index) => {
    //                 return element
    //             });
    //         }
    //     }

    default:
      return [
          counterCreator()
      ];
  }
}

export default counterKeyReducer;

function counterCreator() {
    return {
        key: null,
        count: 0
    }
}


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
