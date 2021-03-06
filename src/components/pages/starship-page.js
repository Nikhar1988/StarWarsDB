import React, {Component} from 'react';
import {StarshipDetails, StarshipList} from '../sw-components';
import Row from '../row/row';

export default class PlanetPage extends Component {

    state ={
        selectedItem: null
    };

    onItemSelected=(selectedItem)=> {
        this.setState({selectedItem});
    };


    render() {

        const {selectedItem} =this.state;
        return (
            <Row 
            left={<StarshipList onItemSelected={this.onItemSelected} />} 
            right={<StarshipDetails itemId={selectedItem} />}/>
        )
    }


}