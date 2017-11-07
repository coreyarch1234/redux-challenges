import React, { Component } from 'react';
import { connect } from 'react-redux';

//animate box
import anime from 'animejs';

class Total extends Component {

     moveLeft(){
         return anime({
           targets: this.divElement,
           translateX: -250,
           duration: 3000
         });
     }
     moveRight(){
         return anime({
           targets: this.divElement,
           translateX: 250,
           duration: 3000
         });
     }
     divChange() {
        if (this.divElement !== undefined) {
            this.moveLeft()
            this.divElement.style.backgroundColor = 'red';
        }
    }

    render() {
        return (
          <div>

            <div id='boxer' style={styles.boxer} ref={(div) => { this.divElement = div; }}>
            </div>

            {this.divChange()}

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
    boxer: {
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        margin: 'auto',
        marginTop: 25,
        padding: 25,
        marginBottom: 50
    }
}

//animator
// var animate = anime({
//   targets: '#boxer',
//   translateX: 250
// });

// var el = document.getElementById('boxer');
// console.log('printing boxer');
// console.log(el);

// <h1>The total is: {this.props.sumCount}</h1>



export default connect(mapStateToProps)(Total);
