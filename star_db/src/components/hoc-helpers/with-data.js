import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({ loading: true, error: false, });
            
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false,
                        error: false,
                    });
                })
                .catch((err) => {
                    this.setState({ error: true });
                });
        }

        render() {
            const { data, loading, error, } = this.state;
            
            if (error) return <ErrorIndicator />;
            if (loading) return (
                <Row className="justify-content-md-center">
                    <Spiner />
                </Row>
            );
            return <View {...this.props} data={data} />;
        }
    };
};

export default withData;