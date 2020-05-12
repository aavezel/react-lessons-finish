import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetail = (props) => {
    return (<ItemDetails {...props}>
        <Record label="Population" field="population" />
        <Record label="Climate" field="climate" />

        <Record label="Surface Water" field="surfaceWater" />
        <Record label="Terrain" field="terrain" />

        <Record label="Diameter" field="diameter" />
        <Record label="Gravity" field="gravity" />

        <Record label="Rotation Period" field="rotationPeriod" />
        <Record label="Orbital Period" field="orbitalPeriod" />
    </ItemDetails>);
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage,
    };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetail);