import React, { Component } from 'react';
import Counter from '../components/counter';

import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY, NEW_COUNTER} from '../actions/index';


function counterCreator() {
    return {
        key: null,
        count: 0
    }
}

const counterKeyReducer = (state = [], action) => {
  switch (action.type) {

    case NEW_COUNTER:
      return [...state, counterCreator()];

    case INCREMENT:
        state[action.payload + 1].count += 1
        console.log(state);
        return state.map((element, index) => {
            return element
        });

    case DECREMENT:
        state[action.payload + 1].count -= 1
        console.log(state);
        return state.map((element, index) => {
            return element
        });

    case RESET_COUNTER:
        state[action.payload + 1].count = 0
        console.log(state);
        return state.map((element, index) => {
            return element
        });

    default:
      return [
          counterCreator()
      ];
  }
}

export default counterKeyReducer;
