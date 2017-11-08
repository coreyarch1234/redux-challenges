import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementBy, deleteCounter, newCounter } from '../actions';

import Counter from './counter.js';

class CounterList extends Component {



    textHide(){
        console.log('The name is: ');
        if (this.textInput !== undefined){
            console.log(this.textInput.value);
            this.textInput.style.display = 'none';
        }

    }

    makeList() {
        return this.props.counterKey.map((counter, index) => {
            return (
                <div key={index}>
                    <input
                      type="text"
                      placeholder="Name"
                      style={styles.textInput}
                      ref={(input) => { this.textInput = input; }} />


                      <button style = {styles.saveButton} onClick={() => {
                        this.textHide();
                      }}>Save</button>


                    <Counter
                        key={index}
                        index={index}
                        count = {counter.count}
                        name={this.textInput === undefined ? 'undefined' : this.textInput.value}
                        increment = {(index) => {this.props.incrementCounter(index)}}
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

                </div>
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
        backgroundColor: '#00223e',
        borderRadius: 5,
        color: 'white',
        border: 'none',
        padding: 15,
        top: 10,
        fontSize: 15,
        marginBottom: 100

    },
    saveButton: {
        backgroundColor: '#00223e',
        borderRadius: 5,
        color: 'white',
        border: 'none',
        padding: 15,
        top: 10,
        fontSize: 25

    },
    textInput: {
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 5,
        fontSize: 25,
        fontWeight: '600',
        color: 'purple',
        textAlign: 'center',
        backgroundColor: '#transparent',
        borderColor: '#43cea2',
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
