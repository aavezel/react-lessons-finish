import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends Component {
    
    state = {
        hasError: false,
    
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }    

    render() {
        if (this.state.hasError) {
            return (
                <Grid container justify="center">
                    <Grid item>
                        <ErrorIndicator />
                    </Grid>
                </Grid>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;