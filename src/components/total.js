import React, { Component } from 'react';
import { connect } from 'react-redux';

//animate box
import anime from 'animejs';

class Total extends Component {
    constructor(props) {
       super(props);
       this.baseCount = this.props.sumCount;
     }

     moveLeft(){
         return anime({
           targets: this.divElement,
           translateX: 500,
           direction: 'alternate',
           loop: true,
           borderRadius: 40,
           easing: 'easeInOutQuad',
           duration: function(el, i, l) {
            return 1000 + (i * 1000);
          }
         });
     }
     moveRight(){
         return anime({
           targets: this.divElement,
           translateY: 500,
           direction: 'alternate',
           loop: true,
           borderRadius: 40,
           easing: 'easeInOutQuad',
           duration: function(el, i, l) {
            return 1000 + (i * 1000);
          }
         });
     }
     divChange() {
        if (this.divElement !== undefined) {
            // if (this.props.sumCount > 10 * this.baseCount){
            //     console.log('it happened');
            //     this.divParent.append(`<div style={styles.boxer} ref={(div) => { this.divElement${this.baseCount} = div; }}>
            //     </div>`)
            // }
            this.moveLeft()
        }
    }

    render() {
            // {this.divChange()}
        return (
          <div ref={(div) => { this.divParent = div; }}>

            <input style={styles.textInput} value={this.props.sumCount} />

            <div style={styles.boxer} ref={(div) => { this.divElement = div; }}>
            </div>



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
    },
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
