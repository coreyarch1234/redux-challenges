import React, { Component } from 'react';
import Counter from '../components/counter';

import {INCREMENT, DECREMENT, RESET_COUNTER, INCREMENT_BY, NEW_COUNTER, DELETE_COUNTER, ADD_NAME} from '../actions/index';


function counterCreator(key) {
    return {
        key: key,
        count: 0,
        name: ''
    }
}

const counterKeyReducer = (state = [], action) => {
  switch (action.type) {

      case ADD_NAME:
          return state.map((element, index) => {
              if (action.payload.key === element.key) {
                  element.name = action.payload.name;
              }
              return element
          });

      case NEW_COUNTER:
        return [...state, counterCreator(state.length)];

      case INCREMENT:
          return state.map((element, index) => {
              if (action.payload === element.key) {
                  element.count += 1;
              }
              return element
          });

      case DECREMENT:
          return state.map((element, index) => {
              if (action.payload === element.key) {
                  element.count -= 1;
              }
              return element
          });

      case RESET_COUNTER:
          return state.map((element, index) => {
              if (action.payload === element.key) {
                  element.count = 0;
              }
              return element
          });

      case DELETE_COUNTER:
          var newState = state;
          newState.splice(action.payload, 1);
          console.log('the action payload is: ' + action.payload);
          console.log(newState);
          return newState.map((element, index) => {
              return element
          });

    case INCREMENT_BY:
        return state.map((element, index) => {
            if (action.payload.keyValue === element.key) {
                element.count += action.payload.amount;
            }
            return element
        });

    default:
      return state;


    }

}

export default counterKeyReducer;
