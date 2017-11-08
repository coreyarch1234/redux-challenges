import React, { Component } from 'react';

// import AnimatedBox from './animated-box'
// <AnimatedBox />
class Counter extends Component {
    constructor(props) {
        super(props)

        this.timerId = null
    }

    componentWillMount() {
        this.startTimer(this.props.index)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }


    //function to increment timer every second
    startTimer(index){
        this.timerId = setInterval(() => {
            this.props.increment(index);
        }, 1000);
    }

    render() {
        return (
          <div>

            <h1>{this.props.name}</h1>
            <h1>{this.props.count}</h1>

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

// <button style = {styles.button} onClick={() => {
//   this.props.onStart();
// }}>Start</button>

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
