import React, { Component } from 'react';

class ErrorButton extends Component {

    state = {
        throwError: false,
    }
    throwError = () => {
        this.setState({throwError : true});
    }

    render() {

        if (this.state.throwError) {
            this.boo.foo = 1;
        }

        return (
            <button className='error-button btn btn-danger btn-lg'
                onClick={this.throwError}
            >
                Throw Error
            </button>
        );
    }
}

export default ErrorButton;