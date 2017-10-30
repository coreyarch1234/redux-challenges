import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';

const store = createStore(reducers);
store.dispatch({type:"INCREMENT"});

class App extends Component {
  render() {
      return (
      <Provider store={store}>
        <div className="App">
            <h1>MultiCounter</h1>
            <Counter incrementValue={5}/>

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
