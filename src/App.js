import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import logo from './logo.svg';
import './App.css';

import Total from './components/total';
import CounterList from './components/counter-list';


import { incrementCounter, decrementCounter, resetCounter, incrementBy, newCounter } from './actions';

//main store
const store = createStore(reducers);

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
              <CounterList />
          </div>
        </Provider>
      );
    }
}

export default App;

const styles = {
    container: {

    }
}
