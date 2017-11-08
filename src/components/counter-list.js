import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, deleteCounter, newCounter } from '../actions';

import Counter from './counter.js';

class CounterList extends Component {

    makeList() {
        return this.props.counterKey.map((counter, index) => {
            return (
                <div key={index}>
                    <input
                      type="text"
                      placeholder= {this.textInput === undefined || this.textInput.value.length == 0 ? 'Change My Name' : this.textInput.value}
                      style={styles.textInput}
                      ref={(input) => { this.textInput = input; }} />

                      <input
                        type="button"
                        value="Done"
                        style={styles.saveButton}
                        onClick={this.done}
                      />


                    <Counter
                        key={index}
                        index={index}
                        count = {counter.count}
                        increment = {(index) => {this.props.incrementCounter(index)}}
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

                </div>
            )
        });
    }

    render() {
        return (
          <div>
              <button style={styles.button} onClick={(e) => {
                  this.props.newCounter();
              }}>ADD</button>
              {this.makeList()}
          </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: '#00223e',
        borderRadius: 5,
        color: 'white',
        border: 'none',
        padding: 15,
        fontSize: 15,
        marginBottom: 100

    },
    saveButton: {
        backgroundColor: '#00223e',
        borderRadius: 5,
        color: '#FFA17F',
        border: 'none',
        padding: 12,
        top: 5,
        fontSize: 12

    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 5,
        marginRight: 5,
        fontSize: 22,
        fontWeight: '600',
        color: 'purple',
        textAlign: 'center',
        backgroundColor: '#FFA17F',
        border: 'none',
        outlineStyle: 'none',
        boxShadow: 'none',
        textShadowColor: 'rgba(0, 0, 0, 0)',
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
