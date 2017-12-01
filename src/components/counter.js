import React, { Component } from 'react';

// import AnimatedBox from './animated-box'
// <AnimatedBox />


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRunning: true
        }

        this.timerId = null;
    }

    componentWillMount() {
        this.startTimer(this.props.index);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    pauseOrPlay(){
        if (this.state.isRunning == true){
            return (
                <button style = {styles.button} onClick={() => {
                  clearInterval(this.timerId);
                  this.setState({isRunning: false});
              }}>PAUSE</button>
            )
        }else{
            return (
                <button style = {styles.button} onClick={() => {
                    this.startTimer(this.props.index);
                    this.setState({isRunning: true});
              }}>PLAY</button>
            )
        }
    }


    //function to increment timer every second
    startTimer(index){
        this.timerId = setInterval(() => {
            this.props.increment(index);
        }, 1000);
    }

    render() {
        return (
          <div style={{padding: 10}}>


            <h1>{this.props.count}</h1>

            {this.pauseOrPlay()}

            <button style = {styles.button} onClick={() => {
              this.props.onReset();
            }}>RESET</button>

            <button style = {styles.button} onClick={() => {
              this.props.onIncrementBy();
           }}>Add 7</button>

            <button style = {styles.button} onClick={() => {
              this.props.onDelete();
            }}>DELETE</button>


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
        padding: 10,
        marginRight: 10,
        fontSize: 12,
        top: 15
    },
    
}


// <button style = {styles.button} onClick={() => {
//   this.props.onUp();
// }}>Up</button>
//
// <button style = {styles.button} onClick={() => {
//   this.props.onDown();
// }}>Down</button>


export default Counter;
