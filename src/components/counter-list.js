import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, deleteCounter, newCounter } from '../actions';

import Counter from './counter.js';

class CounterList extends Component {

    //function to increment timer every second
    incrementTimer(index){
        var timer = setInterval(() => {
            this.props.incrementCounter(index);
        }, 100);
    }

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
                onStart ={() =>{
                    this.incrementTimer(index);
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
              <button style={styles.button} onClick={(e) => {
                  this.props.newCounter();
              }}>Add</button>
              {this.makeList()}
          </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: 'blue',
        borderRadius: 8,
        color: 'white',
        border: 'none',
        padding: 15,
        top: 10,
        fontSize: 15

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
