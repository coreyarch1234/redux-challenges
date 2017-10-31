import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducers from './reducers';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';
// import ListCounters from './components/list-counters';

//main store
const store = createStore(reducers);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            componentsArr: [
                <Counter key={0} keyValue={0} incrementValue={1}/>,
            ]
        }
    }

    addCounters(){
        var componentIndex = this.state.componentsArr.length - 1;

        var newComponent = <Counter key={componentIndex + 1}
                            keyValue={componentIndex + 1}
                             />
        // var updatedComponentArr = this.state.componentsArr.push(newComponent);
        this.setState({componentsArr: this.state.componentsArr.concat([newComponent])})
        return this.state.componentsArr
    }
    render() {
        return (
        <Provider store={store}>
          <div className="App">
              <br/>
              <button onClick={() => {
                {this.addCounters()}
              }}>Add Counter</button>
              {this.state.componentsArr}
          </div>
        </Provider>
      );
    }
}

// <Counter key={0} keyValue={0} incrementValue={1}/>
// <Counter key={1} keyValue={1} incrementValue={5}/>
export default App;

const styles = {
    container: {

    }
}
