import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetail = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Model" field="model" />
            <Record label="Starship Class" field="starshipClass" />
            <Record label="Manufacturer" field="manufacturer" />
            <Record label="Cost In Credits" field="costInCredits" />
            <Record label="Length" field="length" />
            <Record label="Crew" field="crew" />
            <Record label="Passengers" field="passengers" />
            <Record label="Cargo Capacity" field="cargoCapacity" />
            <Record label="Max Atmosphering Speed" field="maxAtmospheringSpeed" />
            <Record label="Hyperdrive Rating" field="hyperdriveRating" />
            <Record label="MGLT" field="MGLT" />
            <Record label="Consumables" field="consumables" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetail);