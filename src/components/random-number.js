import React, {Component} from 'react';
import { connect } from 'react-redux';

import { asyncWait } from '../actions';


class RandomNumber extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.thunker}</h1>
                <button onClick={(e) => {
                    this.props.asyncWait();
                    console.log('async has occurred');
                }}>Random</button>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        thunker: state.thunker
    }
}

export default connect(mapStateToProps, { asyncWait })(RandomNumber);
