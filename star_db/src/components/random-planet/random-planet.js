import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import PlanetView from './planet-view';
import Spiner from '../spiner';

import './random-planet.css';
import { withSwapiService } from '../hoc-helpers';

class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        getData: PropTypes.func,
        getImageUrl: PropTypes.func,
        updateInterval: PropTypes.number,
    }

    state = {
        planet: {},
        loading: true,
    };

    componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData
            || this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updatePlanet();
        }
    }


    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = async () => {
        const planet_id = Math.floor(Math.random() * 15) + 2;
        this.setState({
            loading: true,
        });
        try {
            const planet = await this.props.getData(planet_id)
            this.setState({
                planet,
                loading: false,
            });
        }
        catch (err) {
            this.setState(() => { throw err });
        }
    }

    render() {
        const { planet, loading } = this.state;

        const view = loading ? <Spiner /> : <PlanetView planet={planet} getImageUrl={this.props.getImageUrl} />;

        return (
            <Jumbotron className="random-planet border border-secondary mt-3">
                <Row className="justify-content-md-center">
                    {view}
                </Row>
            </Jumbotron>
        );
    }
}

const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
});

export default withSwapiService(mapMethodsToProps)(RandomPlanet);
