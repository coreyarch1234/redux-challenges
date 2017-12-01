import React, { Component } from 'react';
import Counter from '../components/counter';

import {ASYNC_WAIT, HANDLE_WAIT} from '../actions/index';


const thunkerReducer = (state = 0, action) => {
    console.log('action went through: ');
    console.log(action);
    switch (action.type) {

        case HANDLE_WAIT:
          return action.payload


      default:
        return state;


      }

}


export default thunkerReducer;
