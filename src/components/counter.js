import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
          <div>

            <h1>{this.props.count}</h1>

            <button onClick={() => {
              this.props.onUp();
            }}>Up</button>

            <button onClick={() => {
              this.props.onDown();
            }}>Down</button>

            <button onClick={() => {
              this.props.onReset();
            }}>Reset</button>

            <button onClick={() => {
              this.props.onDelete();
            }}>Delete</button>

          </div>
        );
    }
}

export default Counter;
