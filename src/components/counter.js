import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, newCounter } from '../actions';

class Counter extends Component {
    render() {
        var componentIndex = this.props.keyValue + 1;
        var componentCount = this.props.counterKey[componentIndex].count;
        return (
          <div>
            <h1>{componentCount}</h1>

            <button onClick={() => {
              this.props.incrementCounter(this.props.keyValue);
            }}>Up</button>

            <button onClick={() => {
              this.props.decrementCounter(this.props.keyValue);
            }}>Down</button>

            <button onClick={() => {
              this.props.resetCounter(this.props.keyValue);
            }}>Reset</button>

          </div>
        );
    }
}

const mapStateToProps = (state) => {
    var sumArr = state.counterKey.map((object, index) => {
        return object.count
    });

    var sumCount = sumArr.reduce((sum, value) => sum + value, 0);
    console.log(' sum is: ' + sumCount);

     return {
         counterKey: state.counterKey,
         sumCount: sumCount
      }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        resetCounter: resetCounter,
        incrementBy: incrementBy,
        newCounter: newCounter
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
