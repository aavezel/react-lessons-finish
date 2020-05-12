import React from 'react';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';

const PlanetView = ({ planet, getImageUrl }) => {
    const { id, name, population, diameter, rotationPeriod } = planet;
    const img_url = id == null
        ? null
        : getImageUrl(planet);
    return (
        <Media>
            <img
                width={250}
                height={250}
                className="random-planet-image mr-3"
                src={img_url}
                alt={name}
            />
            <Media.Body>
                <h4>{name}</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </ListGroup.Item>
                </ListGroup>
            </Media.Body>
        </Media>
    );
};

export default PlanetView;