import React from 'react';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';


const swapiService = new SwapiService();

const {
    getAllStarships,
    getAllPeople,
    getAllPlanets } = swapiService;

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


const ListWithChildren = withChildFunchion(ItemList, renderName);



const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
};