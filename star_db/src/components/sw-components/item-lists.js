
import { compose, withData, withChildFunction, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';

const renderNameString = (({ name }) => `${name}`);
const renderPersonalString = (({ name, birthYear }) => `${name} (${birthYear})`);
const renderStarshipString = (({ name, model }) => `${name} (${model})`);

const mapPeopleMethodsToProps = (swapiService) => ({ getData: swapiService.getAllPeople });
const mapPlanetsMethodsToProps = (swapiService) => ({ getData: swapiService.getAllPlanets });
const mapStarshipsMethodsToProps = (swapiService) => ({ getData: swapiService.getAllStarships });

const PersonList =
    compose(
        withSwapiService(mapPeopleMethodsToProps),
        withData,
        withChildFunction(renderPersonalString)
    )(ItemList);

const StarshipList =
    compose(
        withSwapiService(mapStarshipsMethodsToProps),
        withData,
        withChildFunction(renderStarshipString)
    )(ItemList);

const PlanetList =
    compose(
        withSwapiService(mapPlanetsMethodsToProps),
        withData,
        withChildFunction(renderNameString)
    )(ItemList);


export {
    PersonList,
    StarshipList,
    PlanetList
};