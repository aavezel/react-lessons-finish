import React from 'react';
import { connect } from 'react-redux';
import { inc, dec, rnd } from '../actions';


const Counter = ({ counter, inc, dec, rnd }) => {
    return (<div className="jumbotron">
        <h2>{counter}</h2> {" "}
        <button
            className="btn btn-primary btn-lg"
            onClick={dec}
        >
            DEC
            </button> {" "}
        <button
            className="btn btn-primary btn-lg"
            onClick={inc}
        >
            INC
            </button> {" "}
        <button
            className="btn btn-primary btn-lg"
            onClick={rnd}
        >
            RAND
            </button> {" "}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, { inc, dec, rnd })(Counter);