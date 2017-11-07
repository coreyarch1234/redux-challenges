import React, { Component } from 'react';
import { connect } from 'react-redux';

//animate box
import anime from 'animejs';

class Total extends Component {
     divChange() {
        // Explicitly focus the text input using the raw DOM API
        console.log('DIV CHANGED!!');
        if (this.divElement !== undefined) {
            console.log('div is not undefined');
            console.log(this.divElement);
            this.divElement.style.backgroundColor = 'red';
        }
    }
    render() {
        // function getDiv(){
        //     console.log('the div is printed');
        //     console.log(this.Div);
        // }
        function focusTextInput() {
            // Explicitly focus the text input using the raw DOM API
            console.log('FOCUSED!!');
            // this.textInput.focus();
        }

        // function divChange() {
        //     // Explicitly focus the text input using the raw DOM API
        //     console.log('DIV CHANGED!!');
        //     if (this.divElement !== undefined) {
        //         console.log('div is not undefined');
        //     }
        // }

        return (
          <div>
            <h1>The total is: {this.props.sumCount}</h1>

            <div id='boxer' style={styles.boxer} ref={(div) => { this.divElement = div; }}>
            </div>
            <input
             type="button"
             value="Focus the text input"
             onClick={this.divChange()}
           />
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
        padding: 25
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




export default connect(mapStateToProps)(Total);
