import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newCounter, incrementCounter, decrementCounter } from '../actions';

import Counter from './counter';




// class ListCounters extends Component {
//     drawCounters(){
//         return this.props.counters.map((count, index) => {
//             return <Counter key={index}
//                     count={count}
//                     index={index}
//                     onUp={this.props.incrementCounter(index)}
//                     onDown={() => this.props.decrementCounter(index)} />
//         })
//     }
//     render() {
//         return (
//           <div>
//             {this.drawCounters()}
//             <button onClick={() => {
//               this.props.newCounter();
//           }}>Add new counter</button>
//           </div>
//         );
//     }
// }
//
//







const mapStateToProps = (state) => {
  return {
      counterKey: state.counterKey,
      counters: state.counters
   }
}
// counter: state.counter,

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        newCounter: newCounter,
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ListCounters);
