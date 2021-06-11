import React from 'react';
import { withData, withSwapiService, withChildFunchion, compose } from '../hoc-helpers';
import ItemList from '../item-list';


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




const PersonList = compose(
                    withSwapiService(mapPersonMethodToProps),
                    withData,
                    withChildFunchion(renderName)
                    )(ItemList);
                        
                            

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodToProps),
                    withData,
                    withChildFunchion(renderName)
                    )(ItemList);

const StarshipList =  compose(
                        withSwapiService(mapStarshipMethodToProps),
                        withData,
                        withChildFunchion(renderName)
                        )(ItemList);




export {
    PersonList,
    PlanetList,
    StarshipList
};