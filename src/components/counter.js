import React, { Component } from 'react';

// import AnimatedBox from './animated-box'
// <AnimatedBox />
class Counter extends Component {
    render() {
        return (
          <div>

            <h1>{this.props.count}</h1>

            <button style = {styles.button} onClick={() => {
              this.props.onStart();
            }}>Start</button>

            <button style = {styles.button} onClick={() => {
              this.props.onReset();
            }}>Reset</button>

            <button style = {styles.button} onClick={() => {
              this.props.onDelete();
            }}>Delete</button>


          </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: '#00223e',
        borderRadius: 8,
        color: 'white',
        border: 'none',
        padding: 15,
        marginRight: 10,
        fontSize: 18
    }
}


// <button style = {styles.button} onClick={() => {
//   this.props.onUp();
// }}>Up</button>
//
// <button style = {styles.button} onClick={() => {
//   this.props.onDown();
// }}>Down</button>


export default Counter;
