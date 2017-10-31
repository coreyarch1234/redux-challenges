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
                <Counter key={1} incrementValue={1}/>,
                <Counter key={2} incrementValue={5}/>,
                <Counter key={3} incrementValue={1}/>,
                <Counter key={4} incrementValue={1}/>,
                <Counter key={5} incrementValue={2}/>,
                <Counter key={6} incrementValue={3}/>,
                <Counter key={7} incrementValue={4}/>,
                <Counter key={8} incrementValue={5}/>
            ]
        }
    }
    render() {
        return (
        <Provider store={store}>
          <div className="App">
              <Counter keyValue={0} incrementValue={5}/>
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
