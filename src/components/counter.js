import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy } from '../actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => {
        // store.dispatch(incrementCounter())
          this.props.incrementCounter();
        }}>Up</button>

        <button onClick={() => {
          this.props.decrementCounter();
        }}>Down</button>

        <button onClick={() => {
          this.props.resetCounter();
        }}>Reset</button>

        <button onClick={() => {
          this.props.incrementBy(this.props.incrementValue);
      }}>Skip 5</button>
      </div>
    );
  }
}

// export default Counter;

const mapStateToProps = (state) => {
  return { counter: state.counter }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect( //basically allows you to call an action with this.props and have that be passed into the counterReducer to change state
    mapStateToProps,  //taking in state and matching it to props
    {
        incrementCounter, //action creators
        decrementCounter, //action creators
        resetCounter,
        incrementBy
    })(Counter);
