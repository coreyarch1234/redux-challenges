import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy } from '../actions';

class Counter extends Component {
    render() {
        console.log(this.props.counterKey.length);
        console.log('the key is: ' + this.props.keyValue);
        var keyNumber = this.props.keyValue + 1 > this.props.counterKey.length - 1 ? 0 : this.props.keyValue + 1;
        console.log('key number is: ' + keyNumber)
        return (
          <div>
            {this.props.counterKey.length === 1 ? <h1>{this.props.counterKey[0].count}</h1> : <h1>{this.props.counterKey[keyNumber].count}</h1>}
            <button onClick={() => {
              this.props.incrementCounter(this.props.keyValue);
            }}>Up</button>

            <button onClick={() => {
              this.props.decrementCounter(this.props.keyValue);
            }}>Down</button>

            <button onClick={() => {
              this.props.resetCounter(this.props.keyValue);
            }}>Reset</button>

            <button onClick={() => {
              this.props.incrementBy(this.props.incrementValue, this.props.keyValue);
          }}>Skip 5</button>
          </div>
        );
    }
}

// export default Counter;

const mapStateToProps = (state) => {
  return {
      counterKey: state.counterKey,
      counter: state.counter
   }
}
// counter: state.counter,

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        resetCounter: resetCounter,
        incrementBy: incrementBy
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
// export default connect( //basically allows you to call an action with this.props and have that be passed into the counterReducer to change state
//     mapStateToProps,  //taking in state and matching it to props
//     {
//         incrementCounter, //action creators
//         decrementCounter, //action creators
//         resetCounter,
//         incrementBy
//     })(Counter);
