import React, { Component } from 'react';
import { connect } from 'react-redux';


class Total extends Component {
    constructor(props) {
       super(props);
     }
    render() {
        return (
          <div ref={(div) => { this.divParent = div; }}>

            <input style={styles.textInput} value={this.props.sumCount} />

          </div>
        );
    }
}

// <div style={{width: this.props.sumCount * 2, height: this.props.sumCount / 2, backgroundColor: 'blue', margin: 'auto', padding: 25}}>
const mapStateToProps = (state) => {
    var sumArr = state.counterKey.map((object, index) => {
        return object.count
    });

    var sumCount = sumArr.reduce((sum, value) => sum + value, 0);

     return {
         counterKey: state.counterKey,
         sumCount: sumCount
      }
}

const styles = {
    textInput: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: '300',
        color: '#00223e',
        textAlign: 'center',
        backgroundColor: '#FFA17F',
        borderColor: '#00223e'
    }
}


export default connect(mapStateToProps)(Total);
