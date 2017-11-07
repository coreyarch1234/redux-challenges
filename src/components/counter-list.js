import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, deleteCounter, newCounter } from '../actions';

import Counter from './counter.js';

class CounterList extends Component {

    makeList() {
        return this.props.counterKey.map((counter, index) => {
            return (
                <Counter
                key={index}
                count = {counter.count}
                onUp ={() =>{
                    this.props.incrementCounter(index);
                }}
                onDown ={() =>{
                    this.props.decrementCounter(index);
                }}
                onReset ={() =>{
                    this.props.resetCounter(index);
                }}
                onDelete ={() =>{
                    this.props.deleteCounter(index);
                }}
                />
            )
        });
    }

    render() {
        return (
          <div>
              <button onClick={(e) => {
                  this.props.newCounter();
              }}>Add Counter</button>
              {this.makeList()}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('after deletion: ');
    var pissed = state.counterKey.map((element, index) => {
        console.log(element);
        return element
    });

     return {
         counterKey: state.counterKey
      }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        resetCounter: resetCounter,
        incrementBy: incrementBy,
        newCounter: newCounter,
        deleteCounter: deleteCounter
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CounterList);
