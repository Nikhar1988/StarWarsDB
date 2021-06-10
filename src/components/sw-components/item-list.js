import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunchion = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}




const PersonList = withSwapiService(
    withData(
        withChildFunchion(ItemList, renderName)),
    mapPersonMethodToProps);

const PlanetList = withSwapiService(withData(
    withChildFunchion(ItemList, renderName)),
    mapPlanetMethodToProps);

const StarshipList = withSwapiService(withData(
    withChildFunchion(ItemList, renderName)),
    mapStarshipMethodToProps);



export {
    PersonList,
    PlanetList,
    StarshipList
};