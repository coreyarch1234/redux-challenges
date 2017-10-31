import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';

//main store
const store = createStore(reducers);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            componentsArr: [
                <Counter key={0} keyValue={0} incrementValue={1}/>,
                <Counter key={1} keyValue={1} incrementValue={5}/>
            ]
        }
    }
    render() {
        return (
        <Provider store={store}>
          <div className="App">
          <Counter key={0} keyValue={0} incrementValue={1}/>
          <Counter key={1} keyValue={1} incrementValue={5}/>
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
