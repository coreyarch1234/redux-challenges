import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, deleteCounter } from '../actions';

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

            <button onClick={() => {
              this.props.deleteCounter(this.props.keyValue);
            }}>Delete</button>

          </div>
        );
    }
}

const mapStateToProps = (state) => {
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
        deleteCounter: deleteCounter
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
