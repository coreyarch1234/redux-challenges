import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import './App.css';

import Total from './components/total';
import CounterList from './components/counter-list';


import { incrementCounter, decrementCounter, resetCounter, incrementBy, newCounter, asyncWait, handleWait } from './actions';

//animate box
import anime from 'animejs';

import thunk from 'redux-thunk';

import RandomNumber from './components/random-number';

//main store
// const store = createStore(reducers);



const store = createStore(reducers, applyMiddleware(thunk));




//create new counter
function dispatchCounter(){
    store.dispatch(newCounter());
}


class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <Provider store={store}>
          <div className="App">
          <br/>
          <Total />
          <br/>
          <CounterList />
          </div>
        </Provider>
      );
    }
}


// <br/>
// <Total />
// <br/>
// <CounterList />


export default App;

const styles = {

}
