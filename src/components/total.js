import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
    render() {
        console.log('The sum is: ' + this.props.sumCount);
        return (
          <div>
            <h1>The total is: {this.props.sumCount}</h1>
            <div style={{width: this.props.sumCount * 2, height: this.props.sumCount / 2, backgroundColor: 'blue', margin: 'auto', padding: 25}}>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    var sumArr = state.counterKey.map((object, index) => {
        return object.count
    });

    var sumCount = sumArr.reduce((sum, value) => sum + value, 0);
    console.log(' sum is: ' + sumCount);

     return {
         counterKey: state.counterKey,
         sumCount: sumCount
      }
}
export default connect(mapStateToProps)(Total);
